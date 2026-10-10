import Image from "next/image";
import TicketPurchase from "./TicketPurchase";

const PRIZES = [
  "Michael Kors Jet Set crossbody (brown logo print)",
  "Michael Kors vanity case (black)",
  "Coach Nolita 19 (pink)",
  "Michael Kors satchel (logo print)",
  "Michael Kors Jet Set crossbody (pink two-tone)",
];

export default function PursesRaffle() {
  return (
    <section
      id="purses-raffle"
      className="scroll-mt-16 border-b border-hairline bg-charcoal px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-center text-xs text-purses-pink">Raffle No. 2</p>

        <div className="relative mx-auto mt-5 overflow-hidden rounded-2xl border border-hairline">
          <Image
            src="/images/newImageRaffle2.png"
            alt="Designer Purses raffle: Michael Kors crossbody, vanity case, and satchel, plus a Coach Nolita handbag, $50 per ticket"
            width={1672}
            height={941}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-start">
          <ul className="placard-corner relative divide-y divide-hairline rounded-2xl border border-purses-gold/30 bg-ink">
            {PRIZES.map((prize) => (
              <li key={prize} className="px-6 py-3.5 text-sm text-paper">
                {prize}
              </li>
            ))}
          </ul>

          <TicketPurchase raffleId="purses" price={50} theme="purses" />
        </div>
      </div>
    </section>
  );
}
