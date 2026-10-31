"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown, Instagram, Send, Phone } from "lucide-react";

const nav = [["Автомобили", "#cars"], ["Услуги", "#services"], ["О компании", "#about"], ["Контакты", "#contacts"]];

export default function Home() {
  const [open, setOpen] = useState(false);
  return <main>
    <section className="hero" id="top">
      <div className="hero-image" />
      <div className="hero-overlay" />
      <header className="header wrap">
        <a className="logo" href="#top">MAXPRO<span>VDK</span></a>
        <nav className="desktop-nav">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="header-contact" href="#contacts">Связаться <ArrowUpRight size={16}/></a>
        <button className="menu-button" aria-label="Открыть меню" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </header>
      {open && <nav className="mobile-nav">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
      <div className="hero-inner wrap">
        <div className="hero-copy">
          <p className="kicker"><span/> АВТОМОБИЛИ ПОД ВАШИ ЗАДАЧИ</p>
          <h1>НАЙДЁМ<br/><em>ВАШ</em> АВТОМОБИЛЬ</h1>
          <p className="hero-description">Подбор, привоз и продажа автомобилей.<br/>Внимание к деталям. Уверенность в выборе.</p>
          <a className="primary-button" href="#contacts">Подобрать автомобиль <ArrowUpRight size={18}/></a>
        </div>
        <div className="hero-bottom"><span>MAXPRO VDK <b>／</b> АВТОМОБИЛИ</span><span>КАЧЕСТВО. ОПЫТ. ДОВЕРИЕ.</span><a href="#about">ЛИСТАЙТЕ ВНИЗ <ChevronDown size={14}/></a></div>
      </div>
      <div className="vertical-label">VLADIVOSTOK · RUSSIA</div>
    </section>
    <section className="intro wrap" id="about"><p className="section-tag">01 / О КОМПАНИИ</p><div><h2>БОЛЬШЕ, ЧЕМ<br/><span>ПРОСТО АВТО.</span></h2><p className="intro-text">MAXPRO VDK — помогаем найти автомобиль, который действительно подходит вам. Сопровождаем на каждом этапе: от первого запроса до передачи ключей.</p></div></section>
    <section className="services" id="services"><div className="wrap"><p className="section-tag">02 / ЧТО МЫ ДЕЛАЕМ</p><h2>НАШИ <span>УСЛУГИ</span></h2><div className="service-grid"><article><b>01</b><h3>Подбор автомобиля</h3><p>Подбираем автомобиль под ваши задачи, пожелания и бюджет.</p><ArrowUpRight/></article><article><b>02</b><h3>Привоз под заказ</h3><p>Помогаем организовать поиск и доставку автомобиля.</p><ArrowUpRight/></article><article><b>03</b><h3>Продажа автомобилей</h3><p>Помогаем выбрать подходящий вариант и сопровождаем сделку.</p><ArrowUpRight/></article></div></div></section>
    <section className="contact wrap" id="contacts"><div><p className="section-tag">03 / СВЯЗАТЬСЯ С НАМИ</p><h2>ВАШ СЛЕДУЮЩИЙ<br/><span>АВТОМОБИЛЬ</span><br/>НАЧИНАЕТСЯ ЗДЕСЬ.</h2></div><a className="contact-button" href="https://t.me/" target="_blank" rel="noreferrer">Обсудить подбор <ArrowUpRight/></a></section>
    <footer className="footer wrap"><a className="logo" href="#top">MAXPRO<span>VDK</span></a><span>© 2026 MAXPRO VDK</span><span>VLADIVOSTOK, RUSSIA</span></footer>
  </main>;
}
