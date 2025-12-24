"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { desktopNav, mobileMenu, MOBILE_PANEL_TOP_OFFSET_PX } from "./components/nav-data";
import DesktopNav from "./components/DesktopNav";
import HeaderControls from "./components/HeaderControls";
import LanguageSwitcher from "./components/LanguageSwitcher";
import MobileMenu from "./components/MobileMenu";

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

            <LanguageSwitcher />
          </div>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-6 whitespace-nowrap text-sm font-semibold text-black [@media(min-width:1240px)]:flex">
            {desktopNav.map((item) => (
              <DesktopNav key={item.label} item={item} />
            ))}
          </nav>

          <HeaderControls
            isMobileMenuShown={isMobileMenuShown}
            onBurgerClick={() => {
              if (!isMobileMenuShown) {
                openMobileMenu();
                return;
              }

              if (isMobileMenuOpen) closeMobileMenu();
              else openMobileMenu();
            }}
          />
        </div>
      </header>

      <MobileMenu
        isMobileMenuRendered={isMobileMenuRendered}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMenu={mobileMenu}
        closeMobileMenu={closeMobileMenu}
        MOBILE_PANEL_TOP_OFFSET_PX={MOBILE_PANEL_TOP_OFFSET_PX}
      />
    </>
  );
}

