import Link from "next/link";
import { NavItem } from "./nav-data";
import { ChevronDown } from "./icons";

export default function DesktopNav({ item }: { item: NavItem }) {
  const content = (
    <span className="inline-flex items-center gap-1.5">
      {item.label}
      {item.hasSubmenu ? (
        <ChevronDown className="h-4 w-4 text-black/60" />
      ) : null}
    </span>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={
          item.label === "web2app"
            ? "text-[#f59e0b] transition-colors duration-300 ease-out"
            : "transition-colors duration-300 ease-out hover:text-black"
        }
      >
        {content}
      </a>
    );
  }

  if (item.href === "#") {
    return (
      <button
        type="button"
        className="transition-colors duration-300 ease-out hover:text-black"
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={item.href}
      className="transition-colors duration-300 ease-out hover:text-black"
    >
      {content}
    </Link>
  );
}