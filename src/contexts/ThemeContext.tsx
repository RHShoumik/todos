import React, { createContext, useEffect, useState } from 'react';

interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(
        typeof window !== 'undefined' && localStorage.getItem('theme')
            ? (localStorage.getItem('theme') as 'light' | 'dark')
            : 'light'
    );

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);

        // Manually toggle the 'dark' class on the html element
        const htmlElement = document.documentElement;
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};