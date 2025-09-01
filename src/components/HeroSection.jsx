import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const HeroSection = ({ config }) => {
  const { hero } = config;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-financial-blue to-financial-darkBlue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-financial-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-financial-lightBlue rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-financial-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-right space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {hero.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-financial-gold">
                {hero.subtitle}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
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
            <div className="relative z-10">
              <img
                src={hero.image}
                alt="Financial Freedom"
                className="w-full h-auto rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                }}
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
