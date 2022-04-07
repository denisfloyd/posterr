// breakpoint
import { css } from 'styled-components';
import { BREAKPOINTS } from './_variables';

type cssParams = Parameters<typeof css>;

export const mediaQuery = (
  type: 'max' | 'min' = 'max',
  breakpoint: keyof typeof BREAKPOINTS,
  att: 'width' | 'height' = 'width',
) => {
  return (...args: cssParams) => {
    return css`
      @media (${type}-${att}: ${BREAKPOINTS[breakpoint]}) {
        ${css(...args)};
      }
    `;
  };
};

export const setDimensions = (width: string, height = width) => css`
  width: ${width};
  height: ${height};
`;

export const fontSize = (size: number, base = 16) => css`
  font-size: ${size}px; // older browsers fallback
  font-size: calc(${size / base} * 1rem);
`;

export const flexbox = (direction = 'row', align = 'center', justify = 'center') => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`;

export const centerBlock = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const breakLine = (lines = 2) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  -webkit-line-clamp: ${lines};
`;
