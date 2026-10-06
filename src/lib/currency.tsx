import React, { createContext, useContext, useEffect, useState } from "react";

export type CurrencyCode = "KES" | "UGX" | "TZS" | "USD" | "EUR";

export const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  KES: 1,
  UGX: 28.5,
  TZS: 20.0,
  USD: 0.0077,
  EUR: 0.0071,
};

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  KES: "KSh",
  UGX: "UGX",
  TZS: "TZS",
  USD: "$",
  EUR: "€",
};

export const CURRENCIES = [
  { value: "KES", label: "KES - Kenyan Shilling", country: "Kenya" },
  { value: "UGX", label: "UGX - Ugandan Shilling", country: "Uganda" },
  { value: "TZS", label: "TZS - Tanzanian Shilling", country: "Tanzania" },
  { value: "USD", label: "USD - US Dollar", country: "United States" },
  { value: "EUR", label: "EUR - Euro", country: "European Union" },
] as const;

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  convert: (amountInKes: number) => number;
  format: (amountInKes: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("KES");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("claimsdesk-currency") as CurrencyCode;
    if (saved && EXCHANGE_RATES[saved]) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    localStorage.setItem("claimsdesk-currency", c);
  };

  const convert = (amountInKes: number) => {
    return amountInKes * EXCHANGE_RATES[currency];
  };

  const format = (amountInKes: number) => {
    if (!mounted) {
        // Fallback for SSR/Hydration
        return "KSh " + amountInKes.toLocaleString();
    }
    const converted = convert(amountInKes);
    const symbol = CURRENCY_SYMBOLS[currency];
    
    let rounded;
    if (currency === "USD" || currency === "EUR") {
      rounded = converted.toFixed(2);
      if (rounded.endsWith(".00")) rounded = Math.round(converted).toLocaleString();
      else rounded = Number(converted.toFixed(2)).toLocaleString(undefined, { minimumFractionDigits: 2 });
    } else {
      rounded = Math.round(converted).toLocaleString();
    }
    
    return symbol + " " + rounded;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
}
