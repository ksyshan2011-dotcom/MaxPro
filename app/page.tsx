"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, ArrowDown } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-photo" />
        <div className="hero-shade" />
        <header className="hero-header">
          <a className="brand" href="#top">MAXPRO <span>VDK</span><i /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>
        {menuOpen && <nav className="menu-panel">
          <a href="#cars" onClick={() => setMenuOpen(false)}>Автомобили</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>О компании</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
        </nav>}
        <div className="hero-content">
          <p className="hero-eyebrow">АВТОМОБИЛИ ПОД<br />ВАШИ ЗАДАЧИ</p>
          <h1>MAXPRO<br /><span>VDK</span></h1>
          <div className="short-line" />
          <a className="hero-cta" href="#contacts">ПОДОБРАТЬ АВТОМОБИЛЬ <ArrowRight /></a>
        </div>
        <div className="hero-promise"><span />ПРЕМИАЛЬНЫЕ АВТОМОБИЛИ<br />С ГАРАНТИЕЙ РЕЗУЛЬТАТА</div>
        <a className="scroll-hint" href="#about"><ArrowDown /><span>СМОТРЕТЬ ДАЛЬШЕ</span></a>
      </section>
      <section className="below-hero" id="about">
        <p>MAXPRO VDK <span>／</span> VLADIVOSTOK</p>
        <h2>АВТОМОБИЛИ<br /><em>ПОД ВАШИ ЗАДАЧИ</em></h2>
        <p className="below-copy">Подбор, привоз и продажа автомобилей с вниманием к каждой детали.</p>
      </section>
      <section className="below-section" id="cars"><h2>АВТОМОБИЛИ</h2></section>
      <section className="below-section" id="services"><h2>УСЛУГИ</h2></section>
      <section className="below-section" id="contacts"><h2>СВЯЗАТЬСЯ С НАМИ</h2></section>
    </main>
  );
}
