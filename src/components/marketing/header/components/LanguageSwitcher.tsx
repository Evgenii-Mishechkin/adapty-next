import { ChevronDown } from "./icons";

export default function LanguageSwitcher() {
  return (
    <button
      type="button"
      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs font-semibold text-black transition-colors duration-300 ease-out hover:border-black/25"
      aria-label="Language selector"
    >
      RU
      <ChevronDown className="h-3.5 w-3.5 text-black/70" />
    </button>
  );
}