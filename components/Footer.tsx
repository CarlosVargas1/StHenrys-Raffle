import { Church } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-charcoal px-5 py-10 text-center sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3">
        <Church className="h-5 w-5 text-purses-gold" strokeWidth={1.5} />
        <p className="font-semibold text-paper">St. Henry&apos;s Catholic Church</p>
        <p className="text-sm text-mist">Teen Ministry</p>
        <a
          href="https://www.sthenrysatx.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-1 text-sm font-semibold text-spurs-blue underline-offset-4 hover:underline"
        >
          Visit sthenrysatx.org
        </a>
      </div>
    </footer>
  );
}
