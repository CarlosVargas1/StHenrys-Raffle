"use client";

import { useState } from "react";
import { Church, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#spurs-raffle", label: "Spurs Raffle" },
  { href: "#purses-raffle", label: "Designer Purses" },
  { href: "#tickets", label: "Get Tickets" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="focus-ring flex items-center gap-2" onClick={() => setOpen(false)}>
          <Church className="h-5 w-5 text-purses-gold" strokeWidth={2} />
          <span className="display-type text-lg leading-none tracking-wide">
            St. Henry&apos;s <span className="text-spurs-blue">Teen Ministry</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm font-semibold text-mist transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring -mr-2 flex h-10 w-10 items-center justify-center text-paper md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-ink px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block rounded-lg px-3 py-3 text-base font-semibold text-paper active:bg-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
