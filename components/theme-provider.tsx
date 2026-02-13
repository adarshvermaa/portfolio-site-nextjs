"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
    theme: "dark",
    setTheme: () => null,
    toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "dark",
    storageKey = "portfolio-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem(storageKey) as Theme | null;
        if (storedTheme && storedTheme !== theme) {
            setTheme(storedTheme);
        }
        setMounted(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storageKey]);

    useEffect(() => {
        if (!mounted) return; // Wait for mount to avoid mismatch during hydration

        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem(storageKey, theme);
    }, [theme, storageKey, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const value = {
        theme,
        setTheme,
        toggleTheme,
    };

    return (
        <ThemeProviderContext.Provider value={value}>
            {/* Use a div wrapper to handle initial flash if needed, but for now we rely on suppressHydrationWarning in layout */}
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
}
