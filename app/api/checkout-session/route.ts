import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { RAFFLES, isRaffleId } from "@/lib/raffles";

export async function POST(request: NextRequest) {
  let body: { raffle?: string; quantity?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { raffle, quantity } = body;

  if (!raffle || !isRaffleId(raffle)) {
    return NextResponse.json({ error: "Unknown raffle selected." }, { status: 400 });
  }

  if (!Number.isInteger(quantity) || quantity! < 1 || quantity! > 200) {
    return NextResponse.json({ error: "Invalid ticket quantity." }, { status: 400 });
  }

  const config = RAFFLES[raffle];
  const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "";

  try {
    const stripe = getStripe();

    const lineItem = config.priceId
      ? { price: config.priceId, quantity }
      : {
          quantity,
          price_data: {
            currency: "usd",
            unit_amount: config.price * 100,
            product_data: {
              name: `${config.name} Ticket`,
              description: "St. Henry's Catholic Church Teen Ministry fundraising raffle ticket.",
            },
          },
        };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [lineItem],
      custom_fields: [
        {
          key: "full_name",
          label: { type: "custom", custom: "Full Name" },
          type: "text",
        },
      ],
      metadata: {
        raffle,
        raffleName: config.name,
        quantity: String(quantity),
      },
      success_url: `${origin}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#${raffle}-raffle`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Could not start checkout." }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session error:", error);
    return NextResponse.json(
      { error: "Something went wrong starting checkout. Please try again." },
      { status: 500 }
    );
  }
}
