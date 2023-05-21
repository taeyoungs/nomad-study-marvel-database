import { CSSProperties } from 'react';
import { css, cx, keyframes } from '@emotion/css';

import { color } from 'constants/common';

const shimmer = keyframes`
 100% {
    transform: translateX(100%);
  }
`;

interface SkeletonBoxProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  className?: string;
}

function SkeletonBox({ width, height, className: classNameProp, ...props }: SkeletonBoxProps) {
  return (
    <div
      {...props}
      className={cx(
        css`
          display: inline-block;
          position: relative;
          overflow: hidden;
          background-color: ${color.skeleton};
          width: ${width};
          height: ${height};
          &::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0,
              rgba(255, 255, 255, 0.2) 20%,
              rgba(255, 255, 255, 0.5) 60%,
              rgba(255, 255, 255, 0)
            );
            animation: ${shimmer} 2.5s infinite;
            content: '';
          }
        `,
        classNameProp
      )}
    ></div>
  );
}

export default SkeletonBox;
