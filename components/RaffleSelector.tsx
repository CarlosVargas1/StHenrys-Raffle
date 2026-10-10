import { ArrowRight } from "lucide-react";

export default function RaffleSelector() {
  return (
    <section id="tickets" className="scroll-mt-16 bg-ink px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="display-type text-center text-2xl text-mist sm:text-3xl">
          Choose Your Raffle
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Spurs panel */}
          <a
            href="#spurs-raffle"
            className="focus-ring group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-spurs-blue-dim bg-charcoal p-7 transition-colors hover:bg-charcoal-raised"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-spurs-blue/10 blur-3xl"
            />
            <div className="relative">
              <p className="eyebrow text-xs text-spurs-blue">Raffle No. 1</p>
              <h3 className="display-type mt-2 text-3xl leading-[1.15] sm:text-4xl">
                Spurs Jerseys &amp; Hoodies
              </h3>
              <p className="mt-3 text-sm text-mist">
                Duncan, Wembanyama &amp; Staubach jerseys, Nike hoodies, and 4 box seats to Spurs
                vs. Magic.
              </p>
            </div>
            <div className="relative mt-8 flex items-center justify-between">
              <span className="display-type text-2xl text-paper">
                $100<span className="text-sm text-mist">/ticket</span>
              </span>
              <span className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-spurs-blue px-5 py-2.5 text-sm font-bold text-ink">
                View Raffle <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </a>

          {/* Purses panel */}
          <a
            href="#purses-raffle"
            className="focus-ring group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-purses-gold/40 bg-charcoal p-7 transition-colors hover:bg-charcoal-raised"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purses-pink/10 blur-3xl"
            />
            <div className="relative">
              <p className="eyebrow text-xs text-purses-pink">Raffle No. 2</p>
              <h3 className="display-type mt-2 text-3xl leading-[1.15] sm:text-4xl">
                Designer Purses
              </h3>
              <p className="mt-3 text-sm text-mist">
                Michael Kors &amp; Coach handbags &mdash; crossbody, satchel, vanity case, and
                more.
              </p>
            </div>
            <div className="relative mt-8 flex items-center justify-between">
              <span className="display-type text-2xl text-paper">
                $50<span className="text-sm text-mist">/ticket</span>
              </span>
              <span className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purses-gold to-purses-pink px-5 py-2.5 text-sm font-bold text-ink">
                View Raffle <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
