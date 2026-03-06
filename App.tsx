
import React, { useState, useEffect } from 'react';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  // Simple scroll reveal observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10 mix-blend-difference">
        <div className="text-xl font-extrabold tracking-tighter uppercase">EY.</div>
        <div className="flex items-center space-x-6 text-xs font-semibold tracking-widest uppercase">
          <div className="hidden md:flex space-x-6">
             <a href="#packages" className="hover:opacity-50 transition-opacity">{t.nav.pricing}</a>
             <a href="#contact" className="hover:opacity-50 transition-opacity">{t.nav.contact}</a>
          </div>
          <div className="flex items-center space-x-2 border border-white/20 rounded-full px-3 py-1">
            <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-white' : 'text-white/40'} hover:text-white transition-colors`}>EN</button>
            <span className="text-white/20">|</span>
            <button onClick={() => setLang('fr')} className={`${lang === 'fr' ? 'text-white' : 'text-white/40'} hover:text-white transition-colors`}>FR</button>
            <span className="text-white/20">|</span>
            <button onClick={() => setLang('zh')} className={`${lang === 'zh' ? 'text-white' : 'text-white/40'} hover:text-white transition-colors`}>中文</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end p-6 md:p-20 overflow-hidden">
        {/* Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <img 
            src="https://picsum.photos/id/42/1920/1080?grayscale" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-6xl">
          <h2 className="text-sm md:text-lg font-bold tracking-widest uppercase mb-6 text-white/60 scroll-reveal">
            {t.hero.name}
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-10 scroll-reveal">
            {t.hero.headline}
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 scroll-reveal">
            <p className="text-xl md:text-3xl font-light text-white/90 leading-tight max-w-xl">
              {t.hero.sub}
            </p>
            <div className="flex flex-col items-start md:items-end space-y-6 shrink-0">
               <div className="text-sm tracking-widest uppercase opacity-60 flex items-center space-x-3">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 <span>{t.hero.proof}</span>
               </div>
               <button className="bg-white text-black px-10 py-6 text-xl font-bold uppercase tracking-tighter hover:bg-white/90 transition-all transform hover:scale-105">
                 {t.hero.cta}
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-32 px-6 md:px-20 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-24 scroll-reveal">
            {t.pain.headline}
          </h2>
          <div className="space-y-8 mb-24">
            {t.pain.items.map((item, i) => (
              <div key={i} className="flex items-start space-x-8 border-b border-black/10 py-8 scroll-reveal">
                <span className="text-2xl font-bold opacity-20 mt-1">0{i+1}</span>
                <p className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-wide opacity-50 scroll-reveal">
            {t.pain.footer}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-24 max-w-4xl scroll-reveal">
            {t.services.headline}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {t.services.items.map((service, i) => (
              <div key={i} className="group scroll-reveal">
                <div className="text-6xl font-extrabold mb-8 text-white/10 group-hover:text-white transition-colors duration-500">0{i+1}</div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/50 text-xl leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 px-6 md:px-20 bg-white text-black overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-20 scroll-reveal">
            {t.proof.headline}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10 mb-20">
            {t.proof.cases.map((c, i) => (
              <div key={i} className="bg-white aspect-square flex flex-col justify-center items-center p-6 text-center scroll-reveal hover:bg-gray-50 transition-colors">
                <div className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-3">{c.stats}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-40">{c.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-black/10 scroll-reveal">
            <p className="text-xl font-extrabold uppercase italic tracking-tight mb-6 md:mb-0 opacity-80">
              {t.proof.footer}
            </p>
            <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-opacity">
              {t.nav.contact}
            </button>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-40 px-6 md:px-20 relative">
        <div className="max-w-5xl mx-auto text-center scroll-reveal">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase opacity-40 mb-16">{t.diff.headline}</h2>
          <div className="space-y-10">
            <p className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight text-white">
              {t.diff.main}
            </p>
            <p className="text-2xl md:text-4xl font-light text-white/50 leading-tight italic">
              {t.diff.sub}
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-32 px-6 md:px-20 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {t.packages.items.map((item, i) => (
              <div key={i} className="bg-white p-12 flex flex-col justify-between items-start min-h-[280px] scroll-reveal hover:bg-gray-50 transition-colors">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-30 block mb-6">0{i+1}</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter leading-none">{item}</h3>
                </div>
                <button className="text-sm font-bold uppercase tracking-widest flex items-center group mt-8">
                  {t.packages.cta} 
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-40 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="https://picsum.photos/id/10/1920/1080?grayscale" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto scroll-reveal">
          <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-none">
            {t.final.headline}
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-12">
            {t.final.sub}
          </p>
          <button className="bg-white text-black px-12 py-6 text-xl font-bold uppercase tracking-tighter hover:bg-white/80 transition-all transform hover:scale-105 mb-16">
            {t.final.cta}
          </button>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-xs font-bold tracking-[0.2em] uppercase opacity-40">
            <a href="mailto:hello@ethanyuan.com" className="hover:opacity-100 transition-opacity">hello@ethanyuan.com</a>
            <a href="https://instagram.com/ethanyuan" className="hover:opacity-100 transition-opacity">@ethanyuan</a>
            <span>Montreal, QC</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-[10px] tracking-[0.4em] uppercase opacity-20 border-t border-white/5">
        &copy; {new Date().getFullYear()} Ethan Yuan.
      </footer>
    </div>
  );
};

export default App;
