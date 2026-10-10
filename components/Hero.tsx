import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-hairline bg-ink px-5 pb-12 pt-14 sm:px-8 sm:pb-24 sm:pt-20"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/church.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* Soft light wash behind the text so it stays readable without hiding the photo */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 65% at 50% 42%, rgba(250,247,241,0.88), rgba(250,247,241,0.55) 60%, rgba(250,247,241,0.1) 85%)",
          }}
        />
        {/* Gentle fade to the page background at the bottom edge for a seamless transition */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent 55%, var(--ink) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow text-xs text-purses-gold">
          St. Henry&apos;s Catholic Church &middot; Teen Ministry
        </p>

        <h1 className="display-type mx-auto mt-5 max-w-3xl text-[2.4rem] leading-[1.15] sm:text-6xl md:text-[4.2rem]">
          <span className="block">Two amazing raffles.</span>
          <span className="block italic text-purses-gold-light">One great cause.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-mist sm:text-lg">
          Support St. Henry&apos;s Catholic Church Teen Ministry for a chance to win amazing
          prizes!
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href="#spurs-raffle"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-spurs-blue px-7 py-4 text-sm font-semibold tracking-wide text-ink transition-transform active:scale-[0.98] sm:text-base"
          >
            Explore Spurs Raffle
          </a>
          <a
            href="#purses-raffle"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-purses-gold px-7 py-4 text-sm font-semibold tracking-wide text-purses-gold-light transition-transform active:scale-[0.98] sm:text-base"
          >
            Explore Designer Purses
          </a>
        </div>
      </div>
    </section>
  );
}
