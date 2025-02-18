// CSS compatibility utilities
export const getCrossBrowserStyles = (
  property: string,
  value: string
): Record<string, string> => {
  const styles: Record<string, string> = {
    [property]: value,
  };

  // Add vendor prefixes for specific properties
  switch (property) {
    case 'transform':
    case 'transition':
    case 'animation':
    case 'filter':
      styles[`-webkit-${property}`] = value;
      styles[`-moz-${property}`] = value;
      styles[`-ms-${property}`] = value;
      break;
    case 'backdrop-filter':
      styles['-webkit-backdrop-filter'] = value;
      break;
    case 'appearance':
      styles['-webkit-appearance'] = value;
      styles['-moz-appearance'] = value;
      break;
    case 'user-select':
      styles['-webkit-user-select'] = value;
      styles['-moz-user-select'] = value;
      styles['-ms-user-select'] = value;
      break;
  }

  return styles;
};

// Flexbox fallback for older browsers
export const getFlexboxFallback = (
  display: 'flex' | 'inline-flex',
  direction: 'row' | 'column' = 'row'
): Record<string, string> => {
  return {
    display,
    'display': '-webkit-box',
    'display': '-ms-flexbox',
    '-webkit-box-orient': direction === 'row' ? 'horizontal' : 'vertical',
    '-webkit-box-direction': 'normal',
    '-ms-flex-direction': direction,
    'flex-direction': direction,
  };
};

// Grid fallback for older browsers
export const getGridFallback = (
  columns: number,
  gap: number
): Record<string, string> => {
  return {
    display: 'grid',
    'display': '-ms-grid',
    'grid-template-columns': `repeat(${columns}, 1fr)`,
    '-ms-grid-columns': `1fr `.repeat(columns),
    'grid-gap': `${gap}px`,
    'gap': `${gap}px`,
  };
};

// Safari-specific styles
export const getSafariStyles = (styles: Record<string, string>) => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return isSafari ? styles : {};
};

// Firefox-specific styles
export const getFirefoxStyles = (styles: Record<string, string>) => {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  return isFirefox ? styles : {};
};