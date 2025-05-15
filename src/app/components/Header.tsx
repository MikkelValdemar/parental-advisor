"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/theme.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)] bg-opacity-[var(--bg-opacity-header)] backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <svg
                className="w-8 h-8 text-[var(--color-text-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>

            {/* Events Link */}
            <Link
              href="/events"
              className="text-[var(--color-text-primary)] hover-underline"
            >
              {t("navigation.events")}
            </Link>

            {/* Cafés Link */}
            <Link
              href="/cafes"
              className="text-[var(--color-text-primary)] hover-underline"
            >
              {t("navigation.cafes")}
            </Link>

            {/* Playgrounds Link */}
            <Link
              href="/playgrounds"
              className="text-[var(--color-text-primary)] hover-underline"
            >
              {t("navigation.playgrounds")}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Account Section */}
            <Link href="/account" className="flex items-center space-x-2 group">
              <svg
                className="w-5 h-5 text-[var(--color-text-primary)] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-[var(--color-text-primary)] hover-underline">
                {t("navigation.myAccount")}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
