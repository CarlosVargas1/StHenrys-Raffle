import Link from "next/link";
import { CheckCircle2, XCircle, ArrowLeft } from "lucide-react";
import { getStripe } from "@/lib/stripe";
import { DRAWING, RAFFLES, isRaffleId } from "@/lib/raffles";

export const metadata = {
  title: "Thank You | St. Henry's Teen Ministry Raffles",
};

async function getSession(sessionId: string) {
  try {
    const stripe = getStripe();
    return await stripe.checkout.sessions.retrieve(sessionId);
  } catch (error) {
    console.error("Failed to retrieve checkout session:", error);
    return null;
  }
}

export default async function ConfirmationPage({
  searchParams,
}: PageProps<"/confirmation">) {
  const params = await searchParams;
  const sessionId = typeof params.session_id === "string" ? params.session_id : undefined;

  const session = sessionId ? await getSession(sessionId) : null;
  const isPaid = session?.payment_status === "paid";

  const raffleId = session?.metadata?.raffle;
  const raffleInfo = raffleId && isRaffleId(raffleId) ? RAFFLES[raffleId] : null;
  const quantity = session?.metadata?.quantity;
  const total =
    typeof session?.amount_total === "number" ? (session.amount_total / 100).toFixed(2) : null;

  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-ink px-5 py-20 text-center">
      {isPaid ? (
        <div className="flex w-full max-w-md flex-col items-center">
          <CheckCircle2 className="h-14 w-14 text-spurs-blue" strokeWidth={1.5} />
          <h1 className="display-type mt-6 text-[2rem] leading-[1.2] sm:text-4xl">
            Thank You for Supporting
            <br />
            Our Teen Ministry!
          </h1>
          <p className="mt-4 text-base text-mist">
            Thank you for your purchase and for supporting St. Henry&apos;s Catholic Church Teen
            Ministry!
          </p>

          <dl className="mt-10 w-full divide-y divide-hairline rounded-2xl border border-hairline bg-charcoal text-left">
            <div className="flex items-center justify-between px-6 py-4">
              <dt className="text-sm text-mist">Raffle purchased</dt>
              <dd className="font-semibold">{raffleInfo?.shortName ?? "Raffle ticket"}</dd>
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <dt className="text-sm text-mist">Tickets</dt>
              <dd className="font-semibold">{quantity ?? "—"}</dd>
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <dt className="text-sm text-mist">Total paid</dt>
              <dd className="font-semibold">{total ? `$${total}` : "—"}</dd>
            </div>
          </dl>

          <p className="mt-6 text-xs text-mist">
            A receipt has been sent to your email. Winners will be drawn on {DRAWING.label},{" "}
            {DRAWING.date} at {DRAWING.time}. You do not need to be in attendance to win &mdash;
            we&apos;ll be in touch with winners after the drawing. Thank you for your generosity!
          </p>
        </div>
      ) : (
        <div className="flex w-full max-w-md flex-col items-center">
          <XCircle className="h-14 w-14 text-purses-pink" strokeWidth={1.5} />
          <h1 className="display-type mt-6 text-[2rem] leading-[1.2] sm:text-4xl">
            We Couldn&apos;t Confirm
            <br />
            That Payment
          </h1>
          <p className="mt-4 text-base text-mist">
            Your payment may not have completed, or this confirmation link is no longer valid. If
            you were charged, please contact the parish office — otherwise, feel free to try
            again.
          </p>
        </div>
      )}

      <Link
        href="/"
        className="focus-ring mt-10 inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper"
      >
        <ArrowLeft className="h-4 w-4" />
        Return to Homepage
      </Link>
    </main>
  );
}
