import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const Footer = ({ config }) => {
  const { footer } = config;

  const socialIconMap = {
    Facebook,
    Linkedin,
    MessageCircle
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-financial-gold">
              {footer.companyName}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {footer.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-financial-gold" />
                <a 
                  href={`tel:${footer.contact.phone}`}
                  className="text-gray-300 hover:text-financial-gold transition-colors"
                >
                  {footer.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-financial-gold" />
                <a 
                  href={`mailto:${footer.contact.email}`}
                  className="text-gray-300 hover:text-financial-gold transition-colors"
                >
                  {footer.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-financial-gold" />
                <span className="text-gray-300">
                  {footer.contact.address}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-financial-gold">
              קישורים מהירים
            </h4>
            <ul className="space-y-2">
              {footer.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-gray-300 hover:text-financial-gold transition-colors block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-financial-gold">
              עקבו אחרינו
            </h4>
            <div className="flex gap-4">
              {footer.social.map((social, index) => {
                const IconComponent = socialIconMap[social.icon];
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-financial-gold transition-colors group"
                    aria-label={social.name}
                  >
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="#contact-form"
                className="inline-block bg-financial-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                קבלו ייעוץ חינם
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {footer.copyright}
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-financial-gold transition-colors">
                מדיניות פרטיות
              </a>
              <a href="#terms" className="hover:text-financial-gold transition-colors">
                תנאי שימוש
              </a>
              <a href="#cookies" className="hover:text-financial-gold transition-colors">
                עוגיות
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
