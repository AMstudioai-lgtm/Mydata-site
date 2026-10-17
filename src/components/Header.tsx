"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RELEASES_URL } from "@/lib/links";

const LINKS = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#prise-en-main", label: "Prise en main" },
  { href: "#synchronisation", label: "Synchronisation" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-panel">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-8">
        <Link href="#haut" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo Mydata"
            width={32}
            height={32}
            priority
          />
          <span className="text-lg font-bold tracking-tight">Mydata</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink2 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={RELEASES_URL}
            className="bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-sel active:translate-y-px"
          >
            Télécharger
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          <span aria-hidden className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-line bg-panel transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col px-4 py-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-base font-medium text-ink2 last:border-b-0 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={RELEASES_URL}
            className="my-3 bg-accent px-5 py-3 text-center text-base font-bold text-white"
          >
            Télécharger
          </a>
        </nav>
      </div>
    </header>
  );
}
