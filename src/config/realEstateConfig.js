// Real Estate Landing Page Configuration Example
export const realEstateConfig = {
  // Page metadata
  meta: {
    title: "נכסים להשקעה - השקעות נדל\"ן מוכחות",
    description: "מציאת נכסי השקעה איכותיים עם תשואה גבוהה - ייעוץ מקצועי להשקעות נדל\"ן",
    language: "he",
    direction: "rtl"
  },

  // Hero section
  hero: {
    title: "השקעות נדל\"ן חכמות = עתיד פיננסי בטוח!",
    subtitle: "ייעוץ מקצועי להשקעות נדל\"ן עם תשואה מוכחת של 8-12% שנתי",
    description: "השקעות נדל\"ן הן הדרך הבטוחה ביותר לבנות עתיד פיננסי. אנחנו עוזרים לכם למצוא את הנכסים הטובים ביותר.",
    image: "/images/hero-real-estate.jpg",
    ctaText: "קבלו ייעוץ השקעות חינם",
    ctaLink: "#contact-form"
  },

  // Selling points/features
  features: [
    {
      id: 1,
      title: "תשואה גבוהה וקבועה",
      description: "נכסים עם תשואה מוכחת של 8-12% שנתי עם דיירים קבועים",
      icon: "TrendingUp",
      color: "financial-gold"
    },
    {
      id: 2,
      title: "ניהול נכסים מקצועי",
      description: "צוות מקצועי מנהל את הנכסים שלכם ומטפל בכל הפרטים",
      icon: "Shield",
      color: "financial-blue"
    },
    {
      id: 3,
      title: "מגוון נכסים איכותיים",
      description: "בחירה מתוך מאות נכסים איכותיים במיקומים אסטרטגיים",
      icon: "Building",
      color: "financial-lightBlue"
    },
    {
      id: 4,
      title: "ליווי אישי מלא",
      description: "מעקב שוטף ודיווחים מפורטים על ביצועי ההשקעות שלכם",
      icon: "Users",
      color: "financial-darkBlue"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "יוסי כהן",
      role: "משקיע נדל\"ן",
      content: "בזכות הייעוץ המקצועי הצלחתי להרוויח 15% תשואה שנתית על ההשקעות שלי!",
      image: "/images/testimonial-real-estate-1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "מיכל לוי",
      role: "רופאה",
      content: "הניהול המקצועי של הנכסים חוסך לי המון זמן וכאב ראש. ממליצה בחום!",
      image: "/images/testimonial-real-estate-2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "דן רוזן",
      role: "עורך דין",
      content: "התשואה הקבועה מאפשרת לי לתכנן את העתיד הפיננסי של המשפחה שלי.",
      image: "/images/testimonial-real-estate-3.jpg",
      rating: 5
    }
  ],

  // Contact form
  contactForm: {
    title: "קבלו ייעוץ השקעות נדל\"ן חינם",
    subtitle: "פגישה ראשונה ללא עלות - התחילו את המסע שלכם להשקעות נדל\"ן",
    fields: [
      {
        name: "fullName",
        label: "שם מלא",
        type: "text",
        required: true,
        placeholder: "הכנסו את השם המלא שלכם"
      },
      {
        name: "email",
        label: "אימייל",
        type: "email",
        required: true,
        placeholder: "הכנסו את כתובת האימייל שלכם"
      },
      {
        name: "phone",
        label: "טלפון",
        type: "tel",
        required: true,
        placeholder: "הכנסו את מספר הטלפון שלכם"
      }
    ],
    submitText: "קבלו ייעוץ חינם",
    successMessage: "תודה! יועץ השקעות יצור איתכם קשר בהקדם",
    errorMessage: "אירעה שגיאה, אנא נסו שוב"
  },

  // Footer
  footer: {
    companyName: "ייעוץ השקעות נדל\"ן",
    description: "מסייעים למשקיעים למצוא נכסי השקעה איכותיים עם תשואה גבוהה",
    contact: {
      phone: "050-1234567",
      email: "info@real-estate-investments.co.il",
      address: "רחוב רוטשילד 123, תל אביב"
    },
    social: [
      {
        name: "Facebook",
        url: "#",
        icon: "Facebook"
      },
      {
        name: "LinkedIn",
        url: "#",
        icon: "Linkedin"
      },
      {
        name: "WhatsApp",
        url: "#",
        icon: "MessageCircle"
      }
    ],
    links: [
      {
        name: "אודות",
        url: "#about"
      },
      {
        name: "נכסים להשקעה",
        url: "#properties"
      },
      {
        name: "צור קשר",
        url: "#contact"
      },
      {
        name: "מדיניות פרטיות",
        url: "#privacy"
      }
    ],
    copyright: "© 2024 ייעוץ השקעות נדל\"ן. כל הזכויות שמורות."
  },

  // Theme configuration
  theme: {
    primaryColor: "financial-blue",
    secondaryColor: "financial-gold",
    backgroundColor: "white",
    textColor: "gray-800",
    accentColor: "financial-lightBlue"
  }
};

export default realEstateConfig;
