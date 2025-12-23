"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  hasSubmenu?: boolean;
};

const desktopNav: NavItem[] = [
  { label: "Продукт", href: "#", hasSubmenu: true },
  { label: "Кейсы", href: "/case-studies", hasSubmenu: true },
  { label: "Ресурсы", href: "#", hasSubmenu: true },
  { label: "Документация", href: "#", hasSubmenu: true },
  { label: "Цены", href: "/pricing" },
  {
    label: "web2app",
    href: "https://funnelfox.com/?utm_source=adapty&utm_medium=website&utm_campaign=menu",
    external: true,
  },
];

const mobileMenu: NavItem[] = [
  { label: "Компания", href: "#", hasSubmenu: true },
  { label: "Продукт", href: "#", hasSubmenu: true },
  { label: "Решение", href: "#", hasSubmenu: true },
  { label: "Ресурсы", href: "#", hasSubmenu: true },
  { label: "Интеграции", href: "/integrations", hasSubmenu: true },
  { label: "SDK подписок", href: "#", hasSubmenu: true },
  { label: "Исследования", href: "#", hasSubmenu: true },
  { label: "Документация", href: "#", hasSubmenu: true },
  { label: "Цены", href: "/pricing" },
  { label: "Блог", href: "/resources/blog" },
  {
    label: "web2app",
    href: "https://funnelfox.com/?utm_source=adapty&utm_medium=website&utm_campaign=menu"
  },
];

const MOBILE_PANEL_TOP_OFFSET_PX = 72;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuRendered, setIsMobileMenuRendered] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const openMobileMenu = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsMobileMenuRendered(true);
    requestAnimationFrame(() => setIsMobileMenuOpen(true));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    closeTimerRef.current = window.setTimeout(() => {
      setIsMobileMenuRendered(false);
      closeTimerRef.current = null;
    }, 500);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    const rafId = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuRendered) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMobileMenu, isMobileMenuRendered]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuRendered ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuRendered]);

  const headerClassName = useMemo(() => {
    const base =
      "sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-shadow duration-300 ease-out";
    return isScrolled
      ? `${base} border-b border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
      : `${base} border-b border-transparent`;
  }, [isScrolled]);

  const isMobileMenuShown = isMobileMenuRendered;

  return (
    <>
      <header id="site-header" className={headerClassName}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-8 lg:px-10 xl:px-12">
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/"
              aria-label="Go to main page"
              className="inline-flex shrink-0 items-center gap-3"
            >
              <Image
                src="/adapty-logo-black.svg"
                alt="Adapty"
                width={140}
                height={36}
                priority
                className="h-8 w-auto shrink-0"
              />
            </Link>

            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs font-semibold text-black transition-colors duration-300 ease-out hover:border-black/25"
              aria-label="Language selector"
            >
              RU
              <ChevronDown className="h-3.5 w-3.5 text-black/70" />
            </button>
          </div>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-6 whitespace-nowrap text-sm font-semibold text-black [@media(min-width:1201px)]:flex">
            {desktopNav.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Desktop right controls */}
          <div className="hidden shrink-0 items-center gap-3 [@media(min-width:1201px)]:flex">
            <Link
              href="https://app.adapty.io/login"
              className="text-sm font-semibold text-black/80 transition-colors duration-300 ease-out hover:text-black"
              target="_blank"
              rel="noreferrer"
            >
              Войти
            </Link>
            <Link
              href="https://app.adapty.io/registration"
              className="inline-flex items-center gap-2 rounded-xl border border-[#6a3bff] bg-white px-4 py-2 text-sm font-semibold text-[#6a3bff] shadow-sm transition-colors duration-300 ease-out hover:bg-[#6a3bff]/5"
              target="_blank"
              rel="noreferrer"
            >
              Начать
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/schedule-demo"
              className="inline-flex items-center gap-2 rounded-xl bg-[#6a3bff] px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(106,59,255,0.9)] transition duration-300 ease-out hover:brightness-110"
            >
              Запись на демо
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile/Tablet controls */}
          <div className="flex shrink-0 items-center gap-2 [@media(min-width:1201px)]:hidden">
            {/* 576px+ : show text CTAs */}
            <div className="hidden items-center gap-2 [@media(min-width:576px)]:flex">
              <Link
                href="https://app.adapty.io/registration"
                className="inline-flex items-center gap-2 rounded-xl border border-[#6a3bff] bg-white px-4 py-2 text-sm font-semibold text-[#6a3bff] shadow-sm transition-colors duration-300 ease-out hover:bg-[#6a3bff]/5"
                target="_blank"
                rel="noreferrer"
              >
                Начать
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/schedule-demo"
                className="inline-flex items-center gap-2 rounded-xl bg-[#6a3bff] px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(106,59,255,0.9)] transition duration-300 ease-out hover:brightness-110"
              >
                Запись на демо
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* <576px : show 3 icons (login + signup + demo). <=360px: hide icons, keep burger only */}
            <div className="flex items-center gap-2 [@media(min-width:576px)]:hidden [@media(max-width:395px)]:hidden">
              <IconLink
                href="https://app.adapty.io/registration"
                ariaLabel="Sign up"
                external
              >
                <LoginIcon className="h-5 w-5" />
              </IconLink>
              <IconLink href="/schedule-demo" ariaLabel="Schedule a demo">
                <CalendarIcon className="h-5 w-5" />
              </IconLink>
            </div>

            <button
              type="button"
              aria-label={isMobileMenuShown ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isMobileMenuShown}
              onClick={() => {
                if (!isMobileMenuShown) {
                  openMobileMenu();
                  return;
                }

                if (isMobileMenuOpen) closeMobileMenu();
                else openMobileMenu();
              }}
              className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white text-black shadow-sm transition-colors duration-300 ease-out hover:bg-black/5"
            >
              {isMobileMenuShown ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <BurgerIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuRendered ? (
        <div className="fixed inset-0 z-40">
          <button
            type="button"
            aria-label="Закрыть меню"
          className="absolute bottom-0 left-0 right-0 top-[72px] bg-black/30"
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
      ) : null}
    </>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
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

function IconLink({
  href,
  ariaLabel,
  children,
  external,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white text-black/80 shadow-sm transition-colors duration-300 ease-out hover:border-black/20 hover:bg-black/5 hover:text-black";

  if (external) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 7.97a.75.75 0 011.06 0L10 11.69l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.03a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M7.22 14.78a.75.75 0 010-1.06L10.94 10 7.22 6.28a.75.75 0 111.06-1.06l4.25 4.25c.3.3.3.77 0 1.06l-4.25 4.25a.75.75 0 01-1.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M7.5 5.5 12 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LoginIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 -960 960 960"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 -960 960 960"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v200h-80v-40H200v400h280v80H200Zm0-560h560v-80H200v80Zm0 0v-80 80ZM560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
    </svg>
  );
}

