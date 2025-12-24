import Link from "next/link";
import { NavItem } from "./nav-data";
import { ChevronRight } from "./icons";

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
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="https://app.adapty.io/registration"
              className="inline-flex items-center justify-center rounded-xl border border-[#6a3bff] bg-white px-4 py-3 text-sm font-semibold text-[#6a3bff] transition-colors duration-300 ease-out hover:bg-[#6a3bff]/5"
              target="_blank"
              rel="noreferrer"
            >
              Начать
            </Link>
            <Link
              href="/schedule-demo"
              className="inline-flex items-center justify-center rounded-xl bg-[#6a3bff] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(106,59,255,0.9)] transition duration-300 ease-out hover:brightness-110"
            >
              Запись на демо
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}