import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const HeroSection = ({ config }) => {
  const { hero } = config;

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-financial-blue via-financial-lightBlue/20 to-financial-darkBlue overflow-hidden">
      {/* Top Navigation */}
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="container mx-auto px-4">
          <div className="mt-6 flex items-center justify-between rounded-xl backdrop-blur-md bg-white/10 border border-white/15 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-financial-gold/90 ring-2 ring-white/30" />
              <span className="text-white/90 font-semibold tracking-tight">{config?.meta?.title || 'ייעוץ פיננסי אישי'}</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-white/80 text-sm">
              <a href="#features" className="hover:text-white transition-colors">יתרונות</a>
              <a href="#testimonials" className="hover:text-white transition-colors">המלצות</a>
              <a href="#contact-form" className="hover:text-white transition-colors">צור קשר</a>
            </nav>
            <div className="hidden md:block">
              <Button variant="financialGold" size="sm" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                התחילו עכשיו
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Background Ornaments */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-10 w-80 h-80 bg-financial-gold rounded-full mix-blend-multiply filter blur-2xl" />
        <div className="absolute top-10 -right-10 w-96 h-96 bg-financial-lightBlue rounded-full mix-blend-multiply filter blur-2xl" />
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-right space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/90">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs">ליווי אישי ותוכנית פעולה ברורה</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                {hero.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-financial-gold">
                {hero.subtitle}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button 
                variant="financialGold" 
                size="lg"
                className="text-lg px-8 py-4 flex items-center gap-2 group"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.ctaText}
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                גלו את היתרונות
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-end gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-financial-gold">500+</div>
                <div className="text-sm text-gray-300">משפחות מרוצות</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-financial-gold">15,000₪</div>
                <div className="text-sm text-gray-300">חיסכון ממוצע</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-financial-gold">98%</div>
                <div className="text-sm text-gray-300">שיעור הצלחה</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl p-2 bg-white/5 backdrop-blur-md border border-white/10">
              <img
                src={hero.image}
                alt="Financial Freedom"
                className="w-full h-auto rounded-xl shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white/90 rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-semibold text-gray-800">חיסכון מוכח</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-financial-gold rounded-lg p-4 shadow-lg">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">₪15,000</div>
                <div className="text-sm">חיסכון ממוצע</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
