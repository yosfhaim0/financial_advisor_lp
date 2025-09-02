// Generic Landing Page Configuration Structure
export const landingPageConfig = {
  // Page metadata
  meta: {
    title: "ייעוץ פיננסי אישי - הגשימו את החלומות שלכם",
    description: "ייעוץ פיננסי אישי למשפחות ויחידים - בנו תקציב חודשי והגשימו את החלומות שלכם",
    language: "he",
    direction: "rtl"
  },

  // Hero section
  hero: {
    title: "בנו תקציב חודשי ותוכלו להגשים את החלומות שלכם!",
    subtitle: "ייעוץ פיננסי אישי למשפחות ויחידים - שיטה מוכחת לניהול כספים נכון",
    description: "תשימו לב – על מה אתם מוציאים כסף? על מסעדות או על ההגשמה העצמית שלכם? ניהול נכון של כספים = שקט נפשי.",
    image: "/images/hero-financial-freedom.jpg",
    ctaText: "השאירו פרטים וקבלו פגישת ייעוץ ראשונה",
    ctaLink: "#contact-form"
  },

  // Selling points/features
  features: [
    {
      id: 1,
      title: "חיסכון משמעותי בהוצאות",
      description: "למדו לזהות הוצאות מיותרות ולחסוך אלפי שקלים בחודש",
      icon: "PiggyBank",
      color: "financial-gold"
    },
    {
      id: 2,
      title: "שיטה ברורה לניהול תקציב",
      description: "קבלו כלים מעשיים לבניית תקציב חודשי שמתאים לכם",
      icon: "Calculator",
      color: "financial-blue"
    },
    {
      id: 3,
      title: "ליווי אישי עד להצלחה",
      description: "מעקב שוטף ותמיכה מתמשכת עד שתגיעו ליעדים שלכם",
      icon: "Users",
      color: "financial-lightBlue"
    },
    {
      id: 4,
      title: "תכנון פיננסי לטווח ארוך",
      description: "בנו תכנית פיננסית שתבטיח את העתיד שלכם ושל משפחתכם",
      icon: "Target",
      color: "financial-darkBlue"
    }
  ],

  // Testimonials (optional)
  testimonials: [
    {
      id: 1,
      name: "שרה כהן",
      role: "אם לשלושה ילדים",
      content: "בזכות הייעוץ הפיננסי הצלחנו לחסוך 15,000 ש\"ח בחודש ולהגשים את החלום שלנו לטיול משפחתי באירופה!",
      image: "/images/testimonial-1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "דוד לוי",
      role: "עובד הייטק",
      content: "השיטה פשוטה וברורה. הצלחתי לחסוך 30% מהמשכורת ולבנות קרן חירום משמעותית.",
      image: "/images/testimonial-2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "מיכל רוזן",
      role: "עצמאית",
      content: "הליווי האישי עזר לי להבין איך לנהל את העסק שלי בצורה נכונה ולחסוך כסף.",
      image: "/images/testimonial-3.jpg",
      rating: 5
    }
  ],

  // Contact form
  contactForm: {
    title: "השאירו פרטים וקבלו פגישת ייעוץ ראשונה",
    subtitle: "פגישה ראשונה ללא עלות - התחילו את המסע שלכם לחופש פיננסי",
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
    submitText: "שלחו פרטים",
    successMessage: "תודה! נציג יצור איתכם קשר בהקדם",
    errorMessage: "אירעה שגיאה, אנא נסו שוב"
  },

  // Footer
  footer: {
    companyName: "ייעוץ פיננסי אישי",
    description: "מסייעים למשפחות ויחידים להגשים את החלומות הפיננסיים שלהם",
    contact: {
      phone: "050-3023337",
      email: "hodaya22446688@gmail.com",
      address: "רחוב הרצל 123, תל אביב"
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
        name: "שירותים",
        url: "#services"
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
    copyright: "© 2024 ייעוץ פיננסי אישי. כל הזכויות שמורות."
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

// Export for use in components
export default landingPageConfig;
