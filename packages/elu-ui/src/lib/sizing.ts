/**
 * Fluid sizing configuration for responsive design
 * Mobile breakpoint: 768px and below
 * Desktop: above 768px
 */

/**
 * Font size presets for consistent typography across components
 * Format: clamp(min, viewport-based, max)
 */
export const fontSizes = {
  // Component sizes
  'button-sm': 'clamp(0.813rem,0.25vw+0.7rem,0.875rem)', // 13px -> 14px
  base: 'clamp(0.875rem,0.3vw+0.75rem,0.938rem)', // 14px -> 15px (Button default, Input)
  'button-lg': 'clamp(0.938rem,0.35vw+0.8rem,1rem)', // 15px -> 16px

  // Typography sizes
  xs: 'clamp(0.75rem,0.3vw+0.625rem,0.875rem)', // 12px -> 14px
  sm: 'clamp(0.875rem,0.4vw+0.688rem,1rem)', // 14px -> 16px
  'small-muted': 'clamp(0.813rem,0.25vw+0.7rem,0.875rem)', // 13px -> 14px
  md: 'clamp(1rem,0.5vw+0.75rem,1.125rem)', // 16px -> 18px
  large: 'clamp(1rem,0.5vw+0.813rem,1.125rem)', // 16px -> 18px
  lead: 'clamp(1.125rem,0.6vw+0.875rem,1.25rem)', // 18px -> 20px
  lg: 'clamp(1.25rem,0.8vw+0.875rem,1.5rem)', // 20px -> 24px
  h4: 'clamp(1.125rem,0.6vw+0.875rem,1.25rem)', // 18px -> 20px
  h3: 'clamp(1.5rem,0.8vw+1.125rem,1.875rem)', // 24px -> 30px
  h2: 'clamp(1.875rem,1.2vw+1.25rem,2.25rem)', // 30px -> 36px
  xl: 'clamp(1.75rem,1.2vw+1.125rem,2.25rem)', // 28px -> 36px
  h1: 'clamp(2.25rem,1.5vw+1.5rem,3rem)', // 36px -> 48px
} as const;

/**
 * Height presets for components
 */
export const heights = {
  sm: 'clamp(1.75rem,0.8vw+1.3rem,2rem)', // 28px -> 32px (Button sm)
  base: 'clamp(2rem,1vw+1.5rem,2.25rem)', // 32px -> 36px (Button default, Input, Button icon)
  lg: 'clamp(2.25rem,1.2vw+1.7rem,2.5rem)', // 36px -> 40px (Button lg)
  'file-input': 'clamp(1.5rem,0.5vw+1.25rem,1.75rem)', // 24px -> 28px (Input file button)
} as const;

/**
 * Width presets (for square components like icon buttons)
 */
export const widths = {
  icon: 'clamp(2rem,1vw+1.5rem,2.25rem)', // 32px -> 36px
} as const;

/**
 * Spacing presets for padding/margin
 */
export const spacing = {
  'button-sm-icon': 'clamp(0.5rem,0.3vw+0.4rem,0.625rem)', // 8px -> 10px (Button sm with icon)
  sm: 'clamp(0.625rem,0.4vw+0.5rem,0.75rem)', // 10px -> 12px (Input, Button sm)
  base: 'clamp(0.75rem,0.5vw+0.5rem,1rem)', // 12px -> 16px (Button default)
  'button-default-icon': 'clamp(0.625rem,0.4vw+0.5rem,0.75rem)', // 10px -> 12px (Button default with icon)
  'button-lg-icon': 'clamp(0.75rem,0.6vw+0.5rem,1rem)', // 12px -> 16px (Button lg with icon)
  lg: 'clamp(1rem,0.8vw+0.7rem,1.5rem)', // 16px -> 24px (Button lg)
} as const;

/**
 * SVG icon sizes
 */
export const iconSizes = {
  'button-sm': 'clamp(0.75rem,0.25vw+0.65rem,0.875rem)', // 12px -> 14px
  base: 'clamp(0.875rem,0.3vw+0.75rem,1rem)', // 14px -> 16px (Button default)
  'button-lg': 'clamp(1rem,0.35vw+0.85rem,1.125rem)', // 16px -> 18px
  icon: 'clamp(1rem,0.4vw+0.85rem,1.125rem)', // 16px -> 18px (Button icon)
} as const;

/**
 * Helper function to convert fluid size to Tailwind arbitrary value
 * @example toFluid('font-size', fontSizes.base) => '[font-size:clamp(...)]'
 */
export const toFluid = (property: string, value: string) => {
  return `[${property}:${value}]`;
};
