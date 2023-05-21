import { CSSProperties, PropsWithChildren, ElementType } from 'react';
import { cx, css } from '@emotion/css';

import { color } from 'constants/common';

import { FontSize, LineHeight, DEFAULT_ELEMENT } from './contants';

type Typography = keyof typeof FontSize;

type FontWeightType = 300 | 400 | 500 | 700 | 'bold';

interface TextBaseProps {
  display?: CSSProperties['display'];
  lineHeight?: CSSProperties['lineHeight'];
  letterSpacing?: CSSProperties['letterSpacing'];
  weight?: FontWeightType;
  size?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  align?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
  wordBreak?: CSSProperties['wordBreak'];
  typography?: Typography;
  as?: ElementType;
  className?: string;
}

const Text = ({
  display,
  lineHeight: lineHeightProp,
  letterSpacing,
  weight = 400,
  size: sizeProp,
  color: colorProp = color.black,
  align,
  as = 'p',
  whiteSpace,
  wordBreak,
  children,
  className,
  typography = 'regular',
  ...props
}: PropsWithChildren<TextBaseProps>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  const size = sizeProp ?? FontSize[typography];
  const lineHeight = lineHeightProp ?? LineHeight[typography];

  return (
    <Component
      className={cx(
        css`
          display: ${display};
          font-weight: ${weight};
          line-height: ${lineHeight};
          letter-spacing: ${letterSpacing};
          font-size: ${size}px;
          color: ${colorProp};
          text-align: ${align};
          margin: 0;
          font-family: 'rubik', 'sans-serif';
          white-space: ${whiteSpace};
          word-break: ${wordBreak};
        `,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
