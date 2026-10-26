import Image from "next/image";
import { Ticket, CalendarDays, Armchair, Car, UtensilsCrossed } from "lucide-react";
import TicketPurchase from "./TicketPurchase";

const PERKS = [
  { icon: CalendarDays, label: "Thursday, February 4, 2027" },
  { icon: Armchair, label: "Box seating" },
  { icon: Car, label: "VIP parking included" },
  { icon: UtensilsCrossed, label: "Food & drinks included" },
];

export default function SpursRaffle() {
  return (
    <section
      id="spurs-raffle"
      className="scroll-mt-16 border-b border-hairline bg-charcoal px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-center text-xs text-spurs-blue">Raffle No. 1</p>
        <h2 className="display-type mt-3 text-center text-3xl leading-[1.15] sm:text-4xl">
          Spurs Experience
        </h2>

        <div className="relative mx-auto mt-6 overflow-hidden rounded-2xl border border-hairline shadow-sm">
          <Image
            src="/images/raffle1-spurs-experience.webp"
            alt="Raffle 1, Spurs Experience: 2 game tickets, Spurs vs. Orlando Magic, Thursday, February 4, 2027, box seating with VIP parking and food and drinks included, $100 per ticket"
            width={1672}
            height={940}
            className="w-full object-cover"
            priority
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-start">
          <div className="relative overflow-hidden rounded-2xl border border-spurs-blue-dim bg-ink">
            <div className="flex items-center gap-2 bg-spurs-blue-dim/40 px-6 py-2.5">
              <Ticket className="h-4 w-4 text-spurs-blue" />
              <span className="eyebrow text-xs text-spurs-blue">The Prize</span>
            </div>
            <div className="px-6 py-6">
              <h3 className="display-type text-2xl leading-tight">2 Game Tickets</h3>
              <p className="mt-1 text-lg italic text-spurs-silver">
                San Antonio Spurs vs. Orlando Magic
              </p>
              <ul className="mt-5 space-y-3">
                {PERKS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-paper">
                    <Icon className="h-4 w-4 shrink-0 text-spurs-blue" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <TicketPurchase raffleId="spurs" price={100} theme="spurs" />
        </div>
      </div>
    </section>
  );
}
