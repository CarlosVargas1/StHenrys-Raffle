import { ArrowRight } from "lucide-react";

const PANELS = [
  {
    href: "#spurs-raffle",
    number: "Raffle No. 1",
    title: "Spurs Experience",
    blurb: "2 box-seat tickets to Spurs vs. Orlando Magic with VIP parking, food & drinks.",
    price: 100,
    border: "border-spurs-blue-dim",
    glow: "bg-spurs-blue/10",
    accent: "text-spurs-blue",
    button: "bg-spurs-blue",
  },
  {
    href: "#sports-raffle",
    number: "Raffle No. 2",
    title: "Sports Bundle",
    blurb: "Mitchell & Ness Staubach & Duncan jerseys plus Nike Spurs & Cowboys hoodies.",
    price: 75,
    border: "border-sports-royal-dim/50",
    glow: "bg-sports-royal/10",
    accent: "text-sports-royal",
    button: "bg-sports-royal",
  },
  {
    href: "#purses-raffle",
    number: "Raffle No. 3",
    title: "Designer Purse Bundle",
    blurb: "3 Coach & Michael Kors purses, given away in three individual drawings.",
    price: 50,
    border: "border-purses-gold/40",
    glow: "bg-purses-pink/10",
    accent: "text-purses-pink",
    button: "bg-gradient-to-r from-purses-gold to-purses-pink",
  },
];

export default function RaffleSelector() {
  return (
    <section id="tickets" className="scroll-mt-16 bg-ink px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="display-type text-center text-2xl text-mist sm:text-3xl">
          Choose Your Raffle
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PANELS.map((panel) => (
            <a
              key={panel.href}
              href={panel.href}
              className={`focus-ring group relative flex flex-col justify-between overflow-hidden rounded-2xl border ${panel.border} bg-charcoal p-7 transition-colors hover:bg-charcoal-raised`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full ${panel.glow} blur-3xl`}
              />
              <div className="relative">
                <p className={`eyebrow text-xs ${panel.accent}`}>{panel.number}</p>
                <h3 className="display-type mt-2 text-3xl leading-[1.15]">{panel.title}</h3>
                <p className="mt-3 text-sm text-mist">{panel.blurb}</p>
              </div>
              <div className="relative mt-8 flex items-center justify-between">
                <span className="display-type text-2xl text-paper">
                  ${panel.price}
                  <span className="text-sm text-mist">/ticket</span>
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full ${panel.button} px-5 py-2.5 text-sm font-bold text-ink`}
                >
                  View Raffle <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
