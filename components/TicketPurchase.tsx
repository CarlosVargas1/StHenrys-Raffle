"use client";

import { useState } from "react";
import { Minus, Plus, Loader2 } from "lucide-react";
import { TICKETS_PER_RAFFLE, type RaffleId } from "@/lib/raffles";

const MAX_QTY = TICKETS_PER_RAFFLE;

const THEME = {
  spurs: {
    button: "bg-spurs-blue text-ink",
    ring: "focus-visible:outline-spurs-blue",
    border: "border-spurs-blue-dim",
    accentText: "text-spurs-blue",
  },
  sports: {
    button: "bg-sports-royal text-ink",
    ring: "focus-visible:outline-sports-royal",
    border: "border-sports-royal-dim/50",
    accentText: "text-sports-royal",
  },
  purses: {
    button: "bg-gradient-to-r from-purses-gold to-purses-pink text-ink",
    ring: "focus-visible:outline-purses-pink",
    border: "border-purses-gold/40",
    accentText: "text-purses-pink",
  },
} as const;

export default function TicketPurchase({
  raffleId,
  price,
  theme,
}: {
  raffleId: RaffleId;
  price: number;
  theme: keyof typeof THEME;
}) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = THEME[theme];

  const total = price * quantity;

  function updateQuantity(next: number) {
    const clamped = Math.min(MAX_QTY, Math.max(1, next));
    setQuantity(clamped);
  }

  async function handleCheckout() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ raffle: raffleId, quantity }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className={`rounded-2xl border ${t.border} bg-charcoal p-6 sm:p-7`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-wide text-mist">
          Ticket price
        </span>
        <span className="display-type text-2xl">${price}</span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-mist">Quantity</span>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => updateQuantity(quantity - 1)}
            className={`focus-ring flex h-11 w-11 items-center justify-center rounded-full border ${t.border} text-paper active:scale-95`}
          >
            <Minus className="h-4 w-4" />
          </button>
          <input
            type="number"
            inputMode="numeric"
            aria-label="Ticket quantity"
            value={quantity}
            min={1}
            max={MAX_QTY}
            onChange={(e) => updateQuantity(parseInt(e.target.value, 10) || 1)}
            className={`focus-ring h-11 w-16 rounded-lg border ${t.border} bg-ink text-center text-lg font-bold text-paper [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
          />
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => updateQuantity(quantity + 1)}
            className={`focus-ring flex h-11 w-11 items-center justify-center rounded-full border ${t.border} text-paper active:scale-95`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-hairline pt-5">
        <span className="text-sm font-semibold uppercase tracking-wide text-mist">Total</span>
        <span className={`display-type text-3xl ${t.accentText}`}>
          ${total.toLocaleString()}
        </span>
      </div>

      {error && <p className="mt-4 text-sm text-purses-pink">{error}</p>}

      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className={`focus-ring mt-6 flex w-full items-center justify-center gap-2 rounded-full ${t.button} py-4 text-base font-semibold tracking-wide transition-opacity disabled:opacity-60`}
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Redirecting&hellip;
          </>
        ) : (
          "Buy Tickets"
        )}
      </button>

      <p className="mt-3 text-center text-xs text-mist">
        Secure checkout powered by Stripe. Only {TICKETS_PER_RAFFLE} tickets sold for this raffle.
        <br />
        You do not need to be present to win.
      </p>
    </div>
  );
}
