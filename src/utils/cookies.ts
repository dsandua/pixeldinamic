import { trackEvent } from './analytics';

const CONSENT_COOKIE_NAME = 'pixel_dinamic_cookie_consent';
const CONSENT_VERSION = '1.0';

interface ConsentData {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  version: string;
  timestamp: number;
}

export const getConsentCookie = (): ConsentData | null => {
  try {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith(CONSENT_COOKIE_NAME));
    
    if (!cookie) return null;
    
    const value = cookie.split('=')[1];
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
};

export const setConsentCookie = (consent: Omit<ConsentData, 'version' | 'timestamp'>) => {
  const value: ConsentData = {
    ...consent,
    version: CONSENT_VERSION,
    timestamp: Date.now(),
  };

  // Set cookie with 1 year expiry
  const oneYear = 365 * 24 * 60 * 60 * 1000;
  const expires = new Date(Date.now() + oneYear).toUTCString();
  
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
    JSON.stringify(value)
  )}; expires=${expires}; path=/; SameSite=Lax`;

  // Track consent event
  trackEvent({
    action: 'cookie_consent',
    category: 'Privacy',
    label: JSON.stringify(consent),
  });
};

export const hasValidConsent = (): boolean => {
  const consent = getConsentCookie();
  return consent?.version === CONSENT_VERSION;
};