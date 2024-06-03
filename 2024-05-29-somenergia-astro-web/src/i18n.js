import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ca: {
      translation: {
        welcome: "Benvignut a la nostra web!",
        description: "És una descripció en català"
      }
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a nuestro sitio web!",
        description: "Esta es una descripción en español."
      }
    }
  },
  lng: "es", // default language
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;