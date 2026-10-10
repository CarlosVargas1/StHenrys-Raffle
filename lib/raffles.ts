export type RaffleId = "spurs" | "purses";

export const RAFFLES: Record<
  RaffleId,
  { name: string; shortName: string; price: number; priceId: string | undefined }
> = {
  spurs: {
    name: "Spurs Jerseys & Hoodies Raffle",
    shortName: "Spurs Raffle",
    price: 100,
    priceId: process.env.STRIPE_PRICE_SPURS,
  },
  purses: {
    name: "Designer Purses Raffle",
    shortName: "Purses Raffle",
    price: 50,
    priceId: process.env.STRIPE_PRICE_PURSES,
  },
};

export function isRaffleId(value: string): value is RaffleId {
  return value === "spurs" || value === "purses";
}
