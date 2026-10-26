import Image from "next/image";
import { Shirt } from "lucide-react";
import TicketPurchase from "./TicketPurchase";

const PRIZES = [
  { name: "Mitchell & Ness Roger Staubach jersey", value: "$325 value" },
  { name: "Mitchell & Ness Tim Duncan jersey", value: "$150 value" },
  { name: "Nike Spurs hoodie", value: null },
  { name: "Nike Cowboys Salute to Service hoodie", value: null },
];

export default function SportsRaffle() {
  return (
    <section
      id="sports-raffle"
      className="scroll-mt-16 border-b border-hairline bg-ink px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-center text-xs text-sports-royal">Raffle No. 2</p>
        <h2 className="display-type mt-3 text-center text-3xl leading-[1.15] sm:text-4xl">
          Sports Bundle
        </h2>

        <div className="relative mx-auto mt-6 overflow-hidden rounded-2xl border border-hairline shadow-sm">
          <Image
            src="/images/raffle2-sports-bundle.webp"
            alt="Raffle 2, Sports Bundle: Mitchell & Ness Staubach jersey ($325 value), Mitchell & Ness Duncan jersey ($150 value), Nike Spurs hoodie, and Nike Cowboys Salute to Service hoodie, $75 per ticket"
            width={1672}
            height={941}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-start">
          <div className="relative overflow-hidden rounded-2xl border border-sports-royal-dim/50 bg-charcoal">
            <div className="flex items-center gap-2 bg-sports-royal/10 px-6 py-2.5">
              <Shirt className="h-4 w-4 text-sports-royal" />
              <span className="eyebrow text-xs text-sports-royal">One Winner Takes All 4</span>
            </div>
            <ul className="divide-y divide-hairline">
              {PRIZES.map((prize) => (
                <li
                  key={prize.name}
                  className="flex items-baseline justify-between gap-4 px-6 py-3.5 text-sm text-paper"
                >
                  <span>{prize.name}</span>
                  {prize.value && (
                    <span className="shrink-0 text-xs font-semibold text-sports-royal">
                      {prize.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <TicketPurchase raffleId="sports" price={75} theme="sports" />
        </div>
      </div>
    </section>
  );
}
