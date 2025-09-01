import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';
import { validateEmail, validatePhone, validateName, saveFormData } from '../lib/utils';

const ContactForm = ({ config }) => {
  const { contactForm } = config;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(formData.fullName)) {
      newErrors.fullName = 'שם מלא חייב להכיל לפחות 2 תווים';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to local storage
      const success = saveFormData(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', phone: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-financial-blue to-financial-darkBlue" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                {contactForm.title}
              </CardTitle>
              <p className="text-gray-600 text-lg">
                {contactForm.subtitle}
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {contactForm.fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label 
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 text-right"
                    >
                      {field.label}
                      {field.required && <span className="text-red-500 mr-1">*</span>}
                    </label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className={`text-right ${errors[field.name] ? 'border-red-500 focus:border-red-500' : ''}`}
                      dir="rtl"
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm text-right">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">{contactForm.successMessage}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800">{contactForm.errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="financialGold"
                  size="lg"
                  className="w-full text-lg py-3 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      שולח...
                    </>
                  ) : (
                    <>
                      {contactForm.submitText}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>פגישה ראשונה ללא עלות</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>מידע מוגן ומאובטח</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>ללא התחייבות</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
