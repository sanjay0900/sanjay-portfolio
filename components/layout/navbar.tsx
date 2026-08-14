"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

import Container from "@/components/layout/container";
import {
  LOGO_TEXT,
  NAV_LINKS,
  RESUME_URL,
  SCROLL_THRESHOLD,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "border-b border-white/[0.08] bg-[#09090B]/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container>
          <nav
            className="flex h-16 items-center justify-between lg:h-[4.5rem]"
            aria-label="Main navigation"
          >
            <Link
              href="#home"
              className="font-[family-name:var(--font-space)] text-lg font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
            >
              {LOGO_TEXT}
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
            <a
  href={RESUME_URL}
  target="_blank"
  rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#09090B] transition-colors hover:bg-white/90"
              >
                <Download className="size-4" />
                Download Resume
              </a>
            </div>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
            />

            <motion.aside
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-white/[0.08] bg-[#09090B]/95 backdrop-blur-xl lg:hidden"
            >
              <div className="flex h-16 items-center justify-between px-6">
                <span className="font-[family-name:var(--font-space)] text-lg font-semibold text-white">
                  {LOGO_TEXT}
                </span>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                  aria-label="Close menu"
                  onClick={closeMobileMenu}
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col px-6 py-4">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-3 text-base text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-auto pb-8 pt-6"
                >
                  <a
                    href={RESUME_URL}
                    download
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#09090B] transition-colors hover:bg-white/90"
                    onClick={closeMobileMenu}
                  >
                    <Download className="size-4" />
                    Download Resume
                  </a>
                </motion.div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
