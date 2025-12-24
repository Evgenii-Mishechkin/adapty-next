import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "./icons";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "ru", name: "Русский", flag: "https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/ru.svg" },
  { code: "en", name: "English", flag: "https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/en.svg" },
  { code: "tr", name: "Türkçe", flag: "https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/tr.svg" },
  { code: "de", name: "Deutsch", flag: "https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/de.svg" },
  { code: "ua", name: "Українська", flag: "https://adapty.io/assets/uploads/flags/ua.svg" },
  { code: "pl", name: "Polski", flag: "https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/pl.svg" },
  { code: "fr", name: "Français", flag: "https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/fr.svg" },
  { code: "es", name: "Español", flag: "https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/es.svg" },
  { code: "ja", name: "日本語", flag: "https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/ja.svg" },
  { code: "ko", name: "한국어", flag: "https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/ko.svg" },
  { code: "zh", name: "中文", flag: "https://adapty.io/assets/uploads/flags/flag-zh.svg" },
  { code: "pt", name: "Português", flag: "https://adapty.io/assets/uploads/flags/flag-pt.svg" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ru");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (code: string) => {
    setCurrentLang(code);
    setIsOpen(false);
    // Здесь можно добавить логику переключения языка, если нужно
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs font-semibold text-black transition-all duration-300 ease-out hover:border-black/25 hover:bg-black/5"
        aria-label="Language selector"
        aria-expanded={isOpen}
      >
        <Image
          src={currentLanguage.flag}
          alt=""
          width={24}
          height={16}
          className="h-4 w-6 shrink-0 hidden sm:block"
        />
        <span className="uppercase">{currentLanguage.code}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-black/70 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 w-48 origin-top-right animate-in fade-in slide-in-from-top-2 rounded-lg border border-black/10 bg-white py-1 shadow-lg duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors duration-200 ease-out hover:bg-black/5 ${
                lang.code === currentLang ? "bg-black/5 font-semibold" : ""
              }`}
            >
              <Image
                src={lang.flag}
                alt=""
                width={24}
                height={16}
                className="h-4 w-6 shrink-0"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}