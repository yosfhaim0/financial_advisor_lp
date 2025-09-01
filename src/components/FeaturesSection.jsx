import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  PiggyBank, 
  Calculator, 
  Users, 
  Target,
  TrendingUp,
  Shield,
  Clock,
  Award
} from 'lucide-react';

const FeaturesSection = ({ config }) => {
  const { features } = config;

  // Icon mapping
  const iconMap = {
    PiggyBank,
    Calculator,
    Users,
    Target,
    TrendingUp,
    Shield,
    Clock,
    Award
  };

  const getColorClasses = (color) => {
    const colorMap = {
      'financial-gold': 'text-financial-gold bg-yellow-50 border-financial-gold',
      'financial-blue': 'text-financial-blue bg-blue-50 border-financial-blue',
      'financial-lightBlue': 'text-financial-lightBlue bg-blue-50 border-financial-lightBlue',
      'financial-darkBlue': 'text-financial-darkBlue bg-blue-50 border-financial-darkBlue'
    };
    return colorMap[color] || 'text-financial-blue bg-blue-50 border-financial-blue';
  };

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            למה לבחור בייעוץ הפיננסי שלנו?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            שיטה מוכחת שעזרה למאות משפחות להגשים את החלומות הפיננסיים שלהם
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            const colorClasses = getColorClasses(feature.color);

            return (
              <Card 
                key={feature.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-financial-gold"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center border-2 ${colorClasses} group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && <IconComponent className="w-8 h-8" />}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-financial-blue transition-colors">
                    {feature.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-financial-gold rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ניסיון מוכח</h3>
              <p className="text-gray-600">יותר מ-10 שנות ניסיון בייעוץ פיננסי</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-financial-blue rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">אבטחה מלאה</h3>
              <p className="text-gray-600">המידע שלכם מוגן ומאובטח במלואו</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-financial-lightBlue rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">תמיכה 24/7</h3>
              <p className="text-gray-600">זמינים עבורכם בכל שעה לשאלות ותמיכה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
