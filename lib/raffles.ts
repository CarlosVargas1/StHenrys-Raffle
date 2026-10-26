export type RaffleId = "spurs" | "sports" | "purses";

export const RAFFLE_IDS: RaffleId[] = ["spurs", "sports", "purses"];

export const TICKETS_PER_RAFFLE = 150;

export const DRAWING = {
  label: "Christmas Eve",
  date: "Thursday, December 24, 2026",
  time: "7:30 PM",
};

export const RAFFLES: Record<
  RaffleId,
  { name: string; shortName: string; price: number; priceId: string | undefined }
> = {
  spurs: {
    name: "Spurs Experience Raffle",
    shortName: "Spurs Experience",
    price: 100,
    priceId: process.env.STRIPE_PRICE_SPURS,
  },
  sports: {
    name: "Sports Bundle Raffle",
    shortName: "Sports Bundle",
    price: 75,
    priceId: process.env.STRIPE_PRICE_SPORTS,
  },
  purses: {
    name: "Designer Purse Bundle Raffle",
    shortName: "Designer Purse Bundle",
    price: 50,
    priceId: process.env.STRIPE_PRICE_PURSES,
  },
};

export function isRaffleId(value: string): value is RaffleId {
  return (RAFFLE_IDS as string[]).includes(value);
}
