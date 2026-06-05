import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import { translations, LANGUAGES } from "./translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "vertex.lang";

function detectInitial() {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
    const nav = (window.navigator.language || "en").toLowerCase();
    if (nav.startsWith("hi")) return "hi";
    if (nav.startsWith("mr")) return "mr";
    if (nav.startsWith("es")) return "es";
    if (nav.startsWith("fr")) return "fr";
  } catch (_e) {
    // ignore
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(detectInitial());
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.setAttribute("lang", lang);
    } catch (_e) {
      // ignore
    }
  }, [lang]);

  const t = useMemo(() => translations[lang] || translations.en, [lang]);

  const change = useCallback((code) => {
    if (translations[code]) setLang(code);
  }, []);

  const value = useMemo(
    () => ({ lang, t, change, languages: LANGUAGES }),
    [lang, t, change]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
