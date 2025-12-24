import Link from "next/link";
import { NavItem } from "./nav-data";
import { ChevronRight } from "./icons";
import ActionButtons from "./ActionButtons";

function MobileRow({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const className =
    "flex w-full items-center justify-between px-5 py-5 text-base font-semibold text-black transition-colors duration-300 ease-out hover:bg-black/5";

  const right =
    item.hasSubmenu || item.external ? (
      <ChevronRight className="h-5 w-5 text-black/35" />
    ) : (
      <span className="h-5 w-5" />
    );

  const inner = (
    <>
      <span className={item.label === "web2app" ? "text-[#f59e0b]" : undefined}>
        {item.label}
      </span>
      {right}
    </>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`${className} border-b border-black/5`}
        onClick={onNavigate}
      >
        {inner}
      </a>
    );
  }

  if (item.href === "#") {
    return (
      <button
        type="button"
        className={`${className} border-b border-black/5`}
        onClick={onNavigate}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      href={item.href}
      className={`${className} border-b border-black/5`}
      onClick={onNavigate}
    >
      {inner}
    </Link>
  );
}

export default function MobileMenu({
  isMobileMenuRendered,
  isMobileMenuOpen,
  mobileMenu,
  closeMobileMenu,
  MOBILE_PANEL_TOP_OFFSET_PX,
}: {
  isMobileMenuRendered: boolean;
  isMobileMenuOpen: boolean;
  mobileMenu: NavItem[];
  closeMobileMenu: () => void;
  MOBILE_PANEL_TOP_OFFSET_PX: number;
}) {
  if (!isMobileMenuRendered) return null;

  return (
    <div className="fixed inset-0 z-40">
      <button
        type="button"
        aria-label="Закрыть меню"
        className={`absolute bottom-0 left-0 right-0 top-[72px] bg-black/30 transition-opacity duration-500 ease-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{ top: MOBILE_PANEL_TOP_OFFSET_PX }}
        onClick={closeMobileMenu}
      />

      <aside
        className={`absolute bottom-0 right-0 w-[360px] max-w-[92vw] bg-white shadow-2xl transition-transform duration-500 ease-out will-change-transform motion-reduce:transition-none ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: MOBILE_PANEL_TOP_OFFSET_PX }}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="max-h-full overflow-auto px-2 py-2 pb-32">
          {mobileMenu.map((item) => (
            <MobileRow
              key={item.label}
              item={item}
              onNavigate={closeMobileMenu}
            />
          ))}
        </nav>

        <div className="sticky bottom-0 bg-white p-4">
          <ActionButtons />
        </div>
      </aside>
    </div>
  );
}