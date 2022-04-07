import { convertPixelToREM } from './_functions';

// breakpoints
export const BREAKPOINTS = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

// common sizes
export const SIZE = {
  _4: '0.25rem',
  _8: '0.5rem',
  _10: '0.625rem',
  _12: '0.75rem',
  _14: '0.875rem',
  _16: '1rem',
  _18: '1.125rem',
  _20: '1.25rem',
  _22: '1.375rem',
  _24: '1.5rem',
  _32: '2rem',
  _48: '3rem',
};

// dimensions
export const COMMON = {
  BUTTON_HEIGHT: convertPixelToREM(40),
  HEADER_HEIGHT: convertPixelToREM(56),
  SIDEBAR_WIDTH: convertPixelToREM(250),
  INPUT_HEIGHT: convertPixelToREM(40),
  INPUT_MIN_HEIGHT: convertPixelToREM(256),
  FONT_SIZE_BASE: SIZE._14,
};

// font-weights
export const FONT_WEIGHT = {
  NORMAL: 'normal',
  MEDIUM: '500',
  BOLD: '700',
};

// z-index
export const ZINDEX = {
  ZINDEX_1: '1',
  ZINDEX_2: '2',
  ZINDEX_3: '3',
  ZINDEX_10: '10',
  ZINDEX_100: '100',
  ZINDEX_1000: '1000',
};

export const ANIMATIONS = {
  DEFAULT: '0.25s ease',
};
