import Image from "next/image";
import { Ticket, Car, UtensilsCrossed } from "lucide-react";
import TicketPurchase from "./TicketPurchase";

const PRIZES = [
  "Tim Duncan Spurs jersey",
  "Victor Wembanyama Spurs jersey",
  "Roger Staubach Cowboys jersey",
  "Spurs Nike hoodie",
  "Cowboys Nike hoodie",
];

export default function SpursRaffle() {
  return (
    <section
      id="spurs-raffle"
      className="scroll-mt-16 border-b border-hairline bg-charcoal px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-center text-xs text-spurs-blue">Raffle No. 1</p>

        <div className="relative mx-auto mt-5 overflow-hidden rounded-2xl border border-hairline">
          <Image
            src="/images/newImageRaffle1.png"
            alt="Spurs Jerseys & Hoodies raffle: Tim Duncan, Victor Wembanyama, and Roger Staubach jerseys, plus Spurs and Cowboys Nike hoodies, $100 per ticket"
            width={1717}
            height={916}
            className="w-full object-cover"
            priority
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-start">
          <div>
            {/* Grand prize */}
            <div className="relative overflow-hidden rounded-2xl border border-spurs-blue-dim bg-ink">
              <div className="flex items-center gap-2 bg-spurs-blue-dim/40 px-6 py-2.5">
                <Ticket className="h-4 w-4 text-spurs-blue" />
                <span className="eyebrow text-xs text-spurs-blue">Grand Prize</span>
              </div>
              <div className="px-6 py-6">
                <h3 className="display-type text-2xl leading-tight">4 Box-Seat Tickets</h3>
                <p className="mt-1 text-lg italic text-spurs-silver">Spurs vs. Orlando Magic</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
                  <span>Thursday, February 4</span>
                  <span className="flex items-center gap-1.5">
                    <Car className="h-4 w-4" /> Parking included
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UtensilsCrossed className="h-4 w-4" /> Food &amp; drink included
                  </span>
                </div>
              </div>
            </div>

            <ul className="mt-6 divide-y divide-hairline rounded-2xl border border-hairline bg-ink">
              {PRIZES.map((prize) => (
                <li key={prize} className="px-5 py-3 text-sm text-paper">
                  {prize}
                </li>
              ))}
            </ul>
          </div>

          <TicketPurchase raffleId="spurs" price={100} theme="spurs" />
        </div>
      </div>
    </section>
  );
}
