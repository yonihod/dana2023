"use client";
import { usePathname } from "next/navigation";
import React, { Dispatch, createContext } from "react";

type Language = "en" | "he";

type StateType = {
    language: Language;
    setLanguage: (input: Language) => void;
    toggleLanguage: (input: Language) => void;
};

const initialState: StateType = {
    language: "en",
    setLanguage: () => { },
    toggleLanguage: () => { },
};

export const Context = React.createContext<{
    language: Language;
    setLanguage: Dispatch<Language>;
    toggleLanguage: (input: Language) => void;
}>(initialState);

export const ContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [language, setLanguage] = React.useState<Language>("en");
    const toggleLanguage = (input: Language) => {
        if (input === "en") {
            setLanguage("he");
        }
        if (input === "he") {
            setLanguage("en");
        }
    };

    return (
        <Context.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </Context.Provider>
    );
};
