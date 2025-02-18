import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.how-it-works': 'How it Works',
    'nav.benefits': 'Benefits',
    'nav.success-cases': 'Success Cases',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Revolutionize your',
    'hero.title.highlight': 'Booking System',
    'hero.title.with-ai': 'with Artificial Intelligence',
    'hero.subtitle': 'Our AI voice assistant manages your bookings 24/7, eliminating errors and waiting times. Optimize your business with an intelligent solution that increases customer satisfaction and reduces operational costs.',
    'hero.cta.demo': 'Request Free Demo',
    'hero.cta.video': 'Watch Demo Video',

    // Services Section
    'services.title': 'How Our AI Booking System Works',
    'services.voice-assistant.title': 'AI Voice Assistant',
    'services.voice-assistant.description': 'An AI assistant will handle your customers\' calls instantly, with a natural and empathetic tone, ensuring a smooth and professional experience without waiting times.',
    'services.24-7.title': '24/7 AI Service',
    'services.24-7.description': 'The AI will schedule the appointment that best suits your needs. Never miss a booking with our always-active assistant.',
    'services.error-free.title': 'Error-Free Bookings',
    'services.error-free.description': 'Forget about duplicate bookings and scheduling conflicts. Your AI assistant handles everything automatically.',
    'services.tracking.title': 'Recording and Tracking',
    'services.tracking.description': 'All calls will be recorded in audio and text. You\'ll receive automatic email notifications for perfect tracking.',
    'services.multilingual.title': 'Multilingual Support',
    'services.multilingual.description': 'Serve customers in any language. Customize your assistant\'s voice by cloning your own voice or use one of our predefined voices.',
    'services.integration.title': 'Perfect Integration',
    'services.integration.description': 'Easily integrates with all your existing business tools and systems.',
    
    // Work Section
    'work.title': 'Why Automate Bookings?',
    'work.less-errors.title': 'Fewer Errors, Happier Customers',
    'work.less-errors.description': 'Forget about double bookings or missed appointments. With our automation, everything is synchronized in real-time.',
    'work.save-time.title': 'Save Time and Costs',
    'work.save-time.description': 'Let the system manage your appointments while you focus on growing your business. Significantly reduce operational costs.',
    'work.availability.title': '24/7 Availability',
    'work.availability.description': 'Your customers can make bookings anytime. The assistant never rests and can handle multiple calls simultaneously.',
    'work.reminders.title': 'Automatic Reminders',
    'work.reminders.description': 'Reduce cancellations with automatic reminders via WhatsApp, SMS, or email.',
    'work.customization.title': 'Total Customization',
    'work.customization.description': 'We adapt the automation to your specific needs, ensuring an agile and effective system.',
    'work.integration.title': 'Advanced Integration',
    'work.integration.description': 'Connect with WhatsApp, Outlook, Google Calendar, a CRM, or any other app you use. Everything works smoothly and without friction.',
    
    // Success Cases
    'cases.title': 'Success Cases',
    'cases.restaurants.title': 'Restaurants',
    'cases.restaurants.description': 'Automatic booking confirmations and real-time availability notifications.',
    'cases.hotels.title': 'Hotels',
    'cases.hotels.description': 'Automated room booking management.',
    'cases.clinics.title': 'Clinics',
    'cases.clinics.description': 'Appointment reminders and easy rescheduling with a single call.',
    'cases.medical.title': 'Medical Offices',
    'cases.medical.description': 'Efficient booking management and reduced waiting times.',
    'cases.spas.title': 'Spas & Wellness Centers',
    'cases.spas.description': 'Bookings for treatments and massages.',
    'cases.beauty.title': 'Beauty Salons',
    'cases.beauty.description': 'Coordination of appointments for aesthetic treatments.',
    'cases.gyms.title': 'Gyms',
    'cases.gyms.description': 'Session scheduling and attendance reminders.',
    'cases.academies.title': 'Academies',
    'cases.academies.description': 'Class registration and management with tracking.',
    'cases.mechanics.title': 'Auto Repair Shops',
    'cases.mechanics.description': 'Appointment management for inspections and repairs.',
    'cases.consulting.title': 'Consulting',
    'cases.consulting.description': 'Organization of meetings and consultations.',
    'cases.veterinary.title': 'Veterinary Clinics',
    'cases.veterinary.description': 'Scheduling consultations and follow-ups.',
    'cases.coworking.title': 'Coworking',
    'cases.coworking.description': 'Room and workspace reservations.',
    
    // CTA Section
    'cta.title': 'Automate your Bookings, Increase Revenue and Maximize Productivity',
    'cta.description': 'Today, manual booking management is a thing of the past. Whether you have a restaurant, hair salon, hotel, clinic, or any appointment-based business, automating your bookings will not only save you time but also increase your revenue and improve your customers\' experience.',
    'cta.button': 'Start Now',
    
    // Contact Form
    'contact.title': 'Ready to Transform Your Business?',
    'contact.subtitle': 'It\'s time to take the leap! Don\'t let manual management limit your business growth. Automate your booking system and experience a new way of working. Contact us today and take your business to the next level.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.name.placeholder': 'Your name',
    'contact.email.placeholder': 'your@email.com',
    'contact.phone.placeholder': 'Your phone number',
    'contact.message.placeholder': 'Tell us about your business...',
    'contact.submit': 'Request Free Demo',
    'contact.sending': 'Sending...',
    'contact.error.required-fields': 'Please fill in all fields',
    'contact.error.invalid-email': 'Please enter a valid email address',
    'contact.error.send-failed': 'Error sending message. Please try again.',
    'contact.success.message-sent': 'Message sent successfully!',
    
    // Footer
    'footer.description': 'Transforming businesses with AI-powered automation.',
    'footer.quick-links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.follow-us': 'Follow Us',
    'footer.rights': 'All rights reserved.',

    // Cookies
    'cookies.title': 'Cookie Settings',
    'cookies.description': 'We use cookies to enhance your browsing experience and analyze our traffic.',
    'cookies.show_preferences': 'Show cookie preferences',
    'cookies.hide_preferences': 'Hide cookie preferences',
    'cookies.necessary.title': 'Necessary Cookies',
    'cookies.necessary.description': 'These cookies are required for basic site functionality and cannot be disabled.',
    'cookies.analytics.title': 'Analytics Cookies',
    'cookies.analytics.description': 'Help us understand how visitors interact with our website.',
    'cookies.marketing.title': 'Marketing Cookies',
    'cookies.marketing.description': 'Used to deliver personalized advertisements.',
    'cookies.accept_all': 'Accept All Cookies',
    'cookies.save_preferences': 'Save Preferences',

    // Pricing Section
    'pricing.title': 'Plans & Pricing',
    'pricing.subtitle': 'Choose the plan that best fits your needs.',
    'pricing.billing.monthly': 'Monthly',
    'pricing.billing.annual': 'Annual',
    'pricing.billing.discount': '(15% off)',
    'pricing.billing.toggle': 'Toggle billing period',
    'pricing.most_popular': 'Most Popular',
    'pricing.per_month': '/month',
    'pricing.start_trial': 'Start Free Trial',
    'pricing.contact_us': 'Contact Us',
    
    'pricing.basic.name': 'Basic',
    'pricing.basic.description': 'Perfect for small businesses just getting started.',
    'pricing.basic.features': [
      'Up to 100 monthly bookings',
      'AI voice assistant in one language',
      'Automatic email or SMS reminders',
      'Google Calendar integration',
      'Email support'
    ],

    'pricing.standard.name': 'Standard',
    'pricing.standard.description': 'Ideal for growing businesses with multiple employees.',
    'pricing.standard.features': [
      'Up to 500 monthly bookings',
      'Multilingual AI assistant',
      'WhatsApp integration',
      'Multiple calendar management',
      'Booking analysis and reports',
      'Priority chat or email support'
    ],

    'pricing.premium.name': 'Premium',
    'pricing.premium.description': 'For businesses that need advanced features.',
    'pricing.premium.features': [
      'Unlimited bookings',
      'Advanced AI assistant customization',
      'Owner voice cloning',
      'CRM integration',
      'Call recording and analysis',
      'Premium personalized support'
    ],

    'pricing.enterprise.name': 'Custom',
    'pricing.enterprise.description': 'Tailored solution for large businesses and franchises.',
    'pricing.enterprise.features': [
      'Fully customized solution',
      'Custom features',
      'Advanced integrations',
      'Business-specific AI development',
      'Dedicated VIP support',
      'Strategic consulting'
    ],

    'pricing.faq.title': 'Frequently Asked Questions',
    'pricing.faq.1.question': 'What if a client needs to modify or cancel their booking?',
    'pricing.faq.1.answer': 'The system allows clients to modify or cancel their bookings through automated calls or self-management links in reminders sent via WhatsApp, SMS, or email. Additionally, the system will update your calendar in real-time.',
    'pricing.faq.2.question': 'Do I need technical knowledge to use this system?',
    'pricing.faq.2.answer': 'No, the system is intuitive and designed to be user-friendly. We also offer support and training to ensure you can handle it without difficulties.',
    'pricing.faq.3.question': 'Can the assistant handle clients with different needs simultaneously?',
    'pricing.faq.3.answer': 'Yes, the AI assistant can manage multiple calls simultaneously, ensuring no client is left unattended, even during peak demand.',
    'pricing.faq.4.question': 'How can I ensure the system adapts to my business?',
    'pricing.faq.4.answer': 'The system is completely customizable. We can configure specific responses, integrate your current schedule, and adjust the assistant\'s voice according to your brand identity.',
    'pricing.faq.5.question': 'What happens if there\'s an issue with a booking?',
    'pricing.faq.5.answer': 'All calls and bookings are recorded in audio and text files. In case of any discrepancy, you can always access the records to review details and make informed decisions.',
    'pricing.faq.6.question': 'Can the assistant provide additional information to clients, such as prices, promotions, or cancellation policies?',
    'pricing.faq.6.answer': 'Yes, the assistant can be configured to provide information about rates, current promotions, booking terms and conditions, and even answer customized frequently asked questions.'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.how-it-works': 'Funcionamiento',
    'nav.benefits': 'Beneficios',
    'nav.success-cases': 'Casos de Éxito',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Revoluciona tu',
    'hero.title.highlight': 'Sistema de Reservas',
    'hero.title.with-ai': 'con Inteligencia Artificial',
    'hero.subtitle': 'Nuestro asistente de voz con IA gestiona tus reservas 24/7, eliminando errores y tiempos de espera. Optimiza tu negocio con una solución inteligente que aumenta la satisfacción de tus clientes y reduce costos operativos.',
    'hero.cta.demo': 'Solicitar Demo Gratuita',
    'hero.cta.video': 'Ver Video Demo',

    // Services Section
    'services.title': 'Cómo Funciona Nuestro Sistema de Reservas con IA',
    'services.voice-assistant.title': 'Asistente de Voz IA',
    'services.voice-assistant.description': 'Un asistente de IA atenderá las llamadas de tus clientes al instante, con un tono natural y empático, asegurando una experiencia fluida y profesional sin tiempos de espera.',
    'services.24-7.title': 'Servicio 24/7 con IA',
    'services.24-7.description': 'La IA se encargará de agendar la cita que mejor se adapte a tus necesidades. Nunca perderás una reserva con nuestro asistente siempre activo.',
    'services.error-free.title': 'Reservas Sin Errores',
    'services.error-free.description': 'Olvídate de reservas duplicadas y conflictos de programación. Tu asistente IA se encarga de todo automáticamente.',
    'services.tracking.title': 'Registro y Seguimiento',
    'services.tracking.description': 'Todas las llamadas quedarán registradas en audio y texto. Recibirás notificaciones automáticas por correo para un seguimiento perfecto.',
    'services.multilingual.title': 'Soporte Multilingüe',
    'services.multilingual.description': 'Atiende a clientes en cualquier idioma. Personaliza la voz de tu asistente clonando tu propia voz o usa una de nuestras voces predefinidas.',
    'services.integration.title': 'Integración Perfecta',
    'services.integration.description': 'Se integra fácilmente con todas tus herramientas y sistemas empresariales existentes.',
    
    // Work Section
    'work.title': '¿Por qué automatizar las reservas?',
    'work.less-errors.title': 'Menos Errores, Más Clientes Felices',
    'work.less-errors.description': 'Olvídate de dobles reservas o citas perdidas. Con nuestra automatización, todo está sincronizado en tiempo real.',
    'work.save-time.title': 'Ahorra Tiempo y Costes',
    'work.save-time.description': 'Deja que el sistema gestione tus citas mientras te enfocas en hacer crecer tu negocio. Reduce costos operativos significativamente.',
    'work.availability.title': 'Disponibilidad 24/7',
    'work.availability.description': 'Tus clientes pueden hacer reservas en cualquier momento. El asistente nunca descansa y puede atender múltiples llamadas a la vez.',
    'work.reminders.title': 'Recordatorios Automáticos',
    'work.reminders.description': 'Reduce cancelaciones con recordatorios automáticos por WhatsApp, SMS o correo electrónico.',
    'work.customization.title': 'Personalización Total',
    'work.customization.description': 'Adaptamos la automatización a tus necesidades específicas, asegurando un sistema ágil y efectivo.',
    'work.integration.title': 'Integración Avanzada',
    'work.integration.description': 'Conecta con WhatsApp, Outlook, Google Calendar, un CRM o cualquier otra app que uses. Todo funciona de manera fluida y sin fricciones.',
    
    // Success Cases
    'cases.title': 'Casos de Éxito',
    'cases.restaurants.title': 'Restaurantes',
    'cases.restaurants.description': 'Confirmaciones de reservas automáticas y avisos de disponibilidad en tiempo real.',
    'cases.hotels.title': 'Hoteles',
    'cases.hotels.description': 'Gestión automatizada de reservas habitacionales.',
    'cases.clinics.title': 'Clínicas',
    'cases.clinics.description': 'Recordatorios de citas y reprogramaciones fáciles con una sola llamada.',
    'cases.medical.title': 'Consultorios médicos',
    'cases.medical.description': 'Gestión eficiente de reservas y reducción de tiempos de espera.',
    'cases.spas.title': 'Spas y centros de bienestar',
    'cases.spas.description': 'Reservas para tratamientos y masajes.',
    'cases.beauty.title': 'Salones de belleza',
    'cases.beauty.description': 'Coordinación de citas para tratamientos estéticos.',
    'cases.gyms.title': 'Gimnasios',
    'cases.gyms.description': 'Agendamiento de sesiones y recordatorios de asistencia.',
    'cases.academies.title': 'Academias',
    'cases.academies.description': 'Inscripción y gestión de clases con seguimiento.',
    'cases.mechanics.title': 'Talleres mecánicos',
    'cases.mechanics.description': 'Gestión de citas para revisiones y reparaciones.',
    'cases.consulting.title': 'Asesorías',
    'cases.consulting.description': 'Organización de reuniones y consultas.',
    'cases.veterinary.title': 'Veterinarias',
    'cases.veterinary.description': 'Agendamiento de consultas y seguimientos.',
    'cases.coworking.title': 'Coworking',
    'cases.coworking.description': 'Reserva de salas y espacios de trabajo.',
    
    // CTA Section
    'cta.title': 'Automatice sus Reservas, Incremente sus Ingresos y Maximice su Productividad',
    'cta.description': 'Hoy en día, la gestión manual de reservas es cosa del pasado. Si tiene un restaurante, una peluquería, un hotel, una clínica o cualquier negocio basado en citas, automatizar sus reservas no solo le ahorrará tiempo, sino que también aumentará sus ingresos y mejorará la experiencia de sus clientes.',
    'cta.button': 'Comience Ahora',
    
    // Contact Form
    'contact.title': '¿Listo para Transformar tu Negocio?',
    'contact.subtitle': '¡Es el momento de dar el salto! No dejes que la gestión manual limite el crecimiento de tu negocio. Automatiza tu sistema de reservas y experimenta una nueva forma de trabajar. Contáctanos hoy y lleva tu negocio al siguiente nivel.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.phone': 'Teléfono',
    'contact.message': 'Mensaje',
    'contact.name.placeholder': 'Tu nombre',
    'contact.email.placeholder': 'tu@email.com',
    'contact.phone.placeholder': 'Tu número de teléfono',
    'contact.message.placeholder': 'Cuéntanos sobre tu negocio...',
    'contact.submit': 'Solicitar Demo Gratuita',
    'contact.sending': 'Enviando...',
    'contact.error.required-fields': 'Por favor, rellena todos los campos',
    'contact.error.invalid-email': 'Por favor, introduce un email válido',
    'contact.error.send-failed': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    'contact.success.message-sent': '¡Mensaje enviado con éxito!',
    
    // Footer
    'footer.description': 'Transformando negocios con automatizaciones impulsadas por IA.',
    'footer.quick-links': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.follow-us': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',

    // Cookies
    'cookies.title': 'Configuración de Cookies',
    'cookies.description': 'Utilizamos cookies para mejorar tu experiencia de navegación y analizar nuestro tráfico.',
    'cookies.show_preferences': 'Mostrar preferencias de cookies',
    'cookies.hide_preferences': 'Ocultar preferencias de cookies',
    'cookies.necessary.title': 'Cookies Necesarias',
    'cookies.necessary.description': 'Estas cookies son necesarias para el funcionamiento básico del sitio y no se pueden desactivar.',
    'cookies.analytics.title': 'Cookies Analíticas',
    'cookies.analytics.description': 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.',
    'cookies.marketing.title': 'Cookies de Marketing',
    'cookies.marketing.description': 'Se utilizan para entregar publicidad personalizada.',
    'cookies.accept_all': 'Aceptar Todas las Cookies',
    'cookies.save_preferences': 'Guardar Preferencias',

    // Pricing Section
    'pricing.title': 'Planes y Precios',
    'pricing.subtitle': 'Elija el plan que mejor se adapte a sus necesidades.',
    'pricing.billing.monthly': 'Mensual',
    'pricing.billing.annual': 'Anual',
    'pricing.billing.discount': '(15% dto.)',
    'pricing.billing.toggle': 'Cambiar plan de facturación',
    'pricing.most_popular': 'Más Popular',
    'pricing.per_month': '/mes',
    'pricing.start_trial': 'Comenzar prueba gratuita',
    'pricing.contact_us': 'Contactar',
    
    'pricing.basic.name': 'Básico',
    'pricing.basic.description': 'Perfecto para pequeños negocios que están comenzando.',
    'pricing.basic.features': [
      'Hasta 100 reservas mensuales',
      'Asistente IA con voz en un solo idioma',
      'Recordatorios automáticos por correo o SMS',
      'Integración con Google Calendar',
      'Soporte por correo electrónico'
    ],

    'pricing.standard.name': 'Estándar',
    'pricing.standard.description': 'Ideal para negocios en crecimiento con múltiples empleados.',
    'pricing.standard.features': [
      'Hasta 500 reservas mensuales',
      'Asistente IA en múltiples idiomas',
      'Integración con WhatsApp',
      'Gestión de múltiples agendas',
      'Análisis y reportes de reservas',
      'Soporte prioritario por chat o email'
    ],

    'pricing.premium.name': 'Premium',
    'pricing.premium.description': 'Para empresas que necesitan funcionalidades avanzadas.',
    'pricing.premium.features': [
      'Reservas ilimitadas',
      'Personalización avanzada del asistente IA',
      'Clonación de voz del propietario',
      'Integración con CRM',
      'Registro y análisis de llamadas',
      'Soporte técnico premium personalizado'
    ],

    'pricing.enterprise.name': 'Personalizado',
    'pricing.enterprise.description': 'Solución adaptada para grandes empresas y franquicias.',
    'pricing.enterprise.features': [
      'Solución totalmente personalizada',
      'Funcionalidades a medida',
      'Integraciones avanzadas',
      'Desarrollo de IA específica',
      'Soporte VIP dedicado',
      'Consultoría estratégica'
    ],

    'pricing.faq.title': 'Preguntas Frecuentes',
    'pricing.faq.1.question': '¿Qué sucede si un cliente necesita modificar o cancelar su reserva?',
    'pricing.faq.1.answer': 'El sistema permite a los clientes modificar o cancelar sus reservas a través de llamadas automatizadas o enlaces de autogestión en los recordatorios enviados por WhatsApp, SMS o correo electrónico. Además, el sistema actualizará su calendario en tiempo real.',
    'pricing.faq.2.question': '¿Necesito conocimientos técnicos para utilizar este sistema?',
    'pricing.faq.2.answer': 'No, el sistema es intuitivo y diseñado para ser fácil de usar. Además, ofrecemos soporte y capacitación para garantizar que pueda manejarlo sin dificultades.',
    'pricing.faq.3.question': '¿El asistente puede manejar clientes con diferentes necesidades al mismo tiempo?',
    'pricing.faq.3.answer': 'Sí, el asistente IA es capaz de gestionar múltiples llamadas simultáneamente, lo que garantiza que ningún cliente quede sin atención, incluso en momentos de alta demanda.',
    'pricing.faq.4.question': '¿Cómo puedo asegurarme de que el sistema se adapte a mi negocio?',
    'pricing.faq.4.answer': 'El sistema es completamente personalizable. Podemos configurar respuestas específicas, integrar su agenda actual y ajustar la voz del asistente según la identidad de su marca.',
    'pricing.faq.5.question': '¿Qué ocurre si hay un problema con una reserva?',
    'pricing.faq.5.answer': 'Todas las llamadas y reservas quedan registradas en archivos de audio y texto. En caso de cualquier discrepancia, siempre podrá acceder a los registros para revisar detalles y tomar decisiones informadas.',
    'pricing.faq.6.question': '¿El asistente puede ofrecer información adicional a los clientes, como precios, promociones o políticas de cancelación?',
    'pricing.faq.6.answer': 'Sí, el asistente puede ser configurado para proporcionar información sobre tarifas, promociones vigentes, términos y condiciones de reserva, e incluso responder preguntas frecuentes personalizadas.'
  }
};

const getInitialLanguage = (): Language => {
  try {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'es' || savedLang === 'en') {
      return savedLang;
    }
    
    // If no saved language, check browser language
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'es' ? 'es' : 'en';
  } catch {
    // Default to Spanish if localStorage is not available
    return 'es';
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    } catch {
      // Ignore localStorage errors in incognito mode
    }
  }, [language]);

  const t = (key: string): string | string[] => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}