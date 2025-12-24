import Link from "next/link";
import { ArrowRight, LoginIcon, CalendarIcon, BurgerIcon, CloseIcon } from "./icons";

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

interface HeaderControlsProps {
  isMobileMenuShown: boolean;
  onBurgerClick: () => void;
}

export default function HeaderControls({ isMobileMenuShown, onBurgerClick }: HeaderControlsProps) {
  return (
    <>
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
          onClick={onBurgerClick}
          className="grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-white text-black shadow-sm transition-colors duration-300 ease-out hover:bg-black/5"
        >
          <div className="relative h-5 w-5">
            <BurgerIcon className={`absolute inset-0 h-5 w-5 transition-opacity duration-500 ease-out ${isMobileMenuShown ? 'opacity-0' : 'opacity-100'}`} />
            <CloseIcon className={`absolute inset-0 h-5 w-5 transition-opacity duration-500 ease-out ${isMobileMenuShown ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </button>
      </div>
    </>
  );
}