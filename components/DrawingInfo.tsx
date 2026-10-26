import { CalendarDays, Clock, Gift } from "lucide-react";
import { DRAWING, TICKETS_PER_RAFFLE } from "@/lib/raffles";

export default function DrawingInfo() {
  return (
    <section
      id="drawing"
      className="scroll-mt-16 border-y border-hairline bg-charcoal px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="placard-corner relative rounded-2xl border border-purses-gold/40 bg-ink px-6 py-9 text-center sm:px-12">
          <p className="eyebrow text-xs text-purses-gold">Drawing Night</p>
          <h2 className="display-type mt-3 text-3xl leading-[1.15] sm:text-4xl">
            All winners drawn on <span className="italic text-purses-gold-light">{DRAWING.label}</span>
          </h2>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-base font-semibold text-paper sm:flex-row sm:gap-8">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-purses-gold" />
              {DRAWING.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purses-gold" />
              {DRAWING.time}
            </span>
          </div>

          <div className="mx-auto mt-7 flex max-w-xl items-start justify-center gap-3 rounded-xl bg-charcoal px-5 py-4 text-left sm:items-center">
            <Gift className="mt-0.5 h-5 w-5 shrink-0 text-purses-pink sm:mt-0" />
            <p className="text-sm text-paper sm:text-base">
              <strong>You do not need to be in attendance to win.</strong>{" "}
              <span className="text-mist">We&apos;ll contact every winner directly.</span>
            </p>
          </div>

          <p className="mt-5 text-xs text-mist">
            Only {TICKETS_PER_RAFFLE} tickets sold per raffle.
          </p>
        </div>
      </div>
    </section>
  );
}
