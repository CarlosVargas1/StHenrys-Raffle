import Image from "next/image";
import TicketPurchase from "./TicketPurchase";

const DRAWINGS = [
  { number: "1st", label: "First purse drawing" },
  { number: "2nd", label: "Second purse drawing" },
  { number: "3rd", label: "Third purse drawing" },
];

export default function PursesRaffle() {
  return (
    <section
      id="purses-raffle"
      className="scroll-mt-16 border-b border-hairline bg-charcoal px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-center text-xs text-purses-pink">Raffle No. 3</p>
        <h2 className="display-type mt-3 text-center text-3xl leading-[1.15] sm:text-4xl">
          Designer Purse Bundle
        </h2>

        <div className="relative mx-auto mt-6 overflow-hidden rounded-2xl border border-hairline shadow-sm">
          <Image
            src="/images/raffle3-designer-purses.webp"
            alt="Raffle 3, Designer Purse Bundle: 3 designer purses from Coach and Michael Kors, three individual drawings, one ticket will win one purse, $50 per ticket"
            width={1672}
            height={941}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-start">
          <div className="placard-corner relative rounded-2xl border border-purses-gold/30 bg-ink px-6 py-7">
            <h3 className="display-type text-2xl leading-tight">3 Designer Purses</h3>
            <p className="mt-1 text-lg italic text-purses-gold">Coach &amp; Michael Kors</p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Three separate drawings will be held, with three winners receiving one designer purse
              each. Each winning ticket will be removed from the remaining drawings, so every
              ticket has the chance to win only once.
            </p>
            <ol className="mt-5 grid grid-cols-3 gap-2">
              {DRAWINGS.map((drawing) => (
                <li
                  key={drawing.number}
                  aria-label={drawing.label}
                  className="flex flex-col items-center rounded-xl border border-purses-gold/30 bg-charcoal px-2 py-3 text-center"
                >
                  <span className="display-type text-xl text-purses-gold">{drawing.number}</span>
                  <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Drawing
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <TicketPurchase raffleId="purses" price={50} theme="purses" />
        </div>
      </div>
    </section>
  );
}
