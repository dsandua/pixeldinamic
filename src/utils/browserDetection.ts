import { useEffect, useState } from 'react';

// Browser detection utility
export const detectBrowser = (): {
  name: string;
  version: string;
  isModern: boolean;
} => {
  const userAgent = navigator.userAgent;
  let browser = {
    name: 'unknown',
    version: 'unknown',
    isModern: true
  };

  // Chrome
  if (/Chrome/.test(userAgent) && !/Chromium|Edge/.test(userAgent)) {
    browser.name = 'chrome';
    browser.version = userAgent.match(/Chrome\/(\d+)/)?.[1] || 'unknown';
    browser.isModern = parseInt(browser.version) >= 90;
  }
  // Firefox
  else if (/Firefox/.test(userAgent)) {
    browser.name = 'firefox';
    browser.version = userAgent.match(/Firefox\/(\d+)/)?.[1] || 'unknown';
    browser.isModern = parseInt(browser.version) >= 90;
  }
  // Safari
  else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
    browser.name = 'safari';
    browser.version = userAgent.match(/Version\/(\d+)/)?.[1] || 'unknown';
    browser.isModern = parseInt(browser.version) >= 14;
  }
  // Edge (Chromium)
  else if (/Edg/.test(userAgent)) {
    browser.name = 'edge';
    browser.version = userAgent.match(/Edg\/(\d+)/)?.[1] || 'unknown';
    browser.isModern = parseInt(browser.version) >= 90;
  }

  return browser;
};

// Feature detection utilities
export const detectFeatures = () => ({
  webp: testWebP(),
  webgl: testWebGL(),
  grid: testGrid(),
  flexGap: testFlexGap(),
  touchEvents: 'ontouchstart' in window,
});

// Test WebP support
const testWebP = (): boolean => {
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

// Test WebGL support
const testWebGL = (): boolean => {
  const canvas = document.createElement('canvas');
  return !!(
    window.WebGLRenderingContext &&
    (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
  );
};

// Test CSS Grid support
const testGrid = (): boolean => {
  return window.CSS?.supports?.('display: grid') ?? false;
};

// Test gap support in flexbox
const testFlexGap = (): boolean => {
  return window.CSS?.supports?.('gap: 1px') ?? false;
};

// Hook for browser detection
export const useBrowserDetection = () => {
  const [browser, setBrowser] = useState(() => detectBrowser());
  const [features, setFeatures] = useState(() => detectFeatures());

  useEffect(() => {
    setBrowser(detectBrowser());
    setFeatures(detectFeatures());
  }, []);

  return { browser, features };
};