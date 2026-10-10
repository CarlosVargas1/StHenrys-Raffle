# St. Henry's Teen Ministry Raffles

A single-page fundraising site for two raffles benefiting St. Henry's Catholic Church Teen
Ministry — **Spurs Jerseys & Hoodies** ($100/ticket) and **Designer Purses** ($50/ticket) — with
Stripe Checkout for ticket purchases.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Lucide Icons, and the Stripe
SDK. No database, auth, or admin dashboard — raffle entries are tracked manually from the Stripe
Dashboard.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure Stripe

1. Copy the example env file:

   ```bash
   cp .env.local.example .env.local
   ```

2. In the [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys) (test mode), grab your
   **Secret key** and set it as `STRIPE_SECRET_KEY`.
3. Create two Products in Stripe (test mode), one for each raffle, each with a one-time Price:
   - "Spurs Jerseys & Hoodies Raffle Ticket" — $100.00
   - "Designer Purses Raffle Ticket" — $50.00
4. Copy each Price ID (starts with `price_`) into `STRIPE_PRICE_SPURS` and `STRIPE_PRICE_PURSES`.
5. Set `NEXT_PUBLIC_SITE_URL` to your local or deployed URL (used for the Checkout redirect and
   social-sharing metadata).

If a Price ID is left unset, the checkout route falls back to creating the line item on the fly
using the price shown on the site, so local testing works even before Products are set up in
Stripe — but production should use real Price IDs.

Test the flow with [Stripe's test card numbers](https://docs.stripe.com/testing), e.g.
`4242 4242 4242 4242`, any future expiry, any CVC.

**Live payments:** keep `STRIPE_SECRET_KEY` in test mode (`sk_test_...`) until Stripe has reviewed
and approved the account for this raffle activity. Only switch to a live key (`sk_live_...`) and
live Price IDs once that approval is in place.

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the same environment variables from `.env.local` in the Vercel project's Settings →
   Environment Variables (`STRIPE_SECRET_KEY`, `STRIPE_PRICE_SPURS`, `STRIPE_PRICE_PURSES`,
   `NEXT_PUBLIC_SITE_URL` — set this to your production domain).
4. Deploy. Vercel builds and hosts the app automatically on every push.

## How purchases are tracked

Each Stripe Checkout session stores `raffle`, `raffleName`, and `quantity` in its metadata, and
collects the purchaser's name (custom field) and email. Review purchases under **Payments** in the
Stripe Dashboard, filtering or searching by metadata to tally entries per raffle. Since ticket
sales aren't tracked in a database, disable or remove a raffle's "Buy Tickets" button here in the
code once its 200-ticket limit is reached.
# StHenrys-Raffle
