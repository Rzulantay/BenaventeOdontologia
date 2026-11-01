"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#inicio"
        aria-label={`${site.name}, inicio`}
        onClick={() => setMenuOpen(false)}
      >
        <span className="brand-mark">SB</span>
        <span className="brand-name">{site.name}</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <nav
        id="primary-navigation"
        className={`navigation${menuOpen ? " navigation-open" : ""}`}
        aria-label="Navegación principal"
      >
        {site.navigation.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contacto"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Solicitar evaluación <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
