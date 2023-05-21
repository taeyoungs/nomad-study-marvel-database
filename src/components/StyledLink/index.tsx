import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { css } from '@emotion/css';

import { color } from 'constants/common';

interface StyledLinkProps extends LinkProps {
  external?: boolean;
}

function StyledLink({ children, external = false, ...props }: PropsWithChildren<StyledLinkProps>) {
  return external ? (
    <a
      className={css`
        text-decoration: none;
        color: ${color.linkDefault};
        &:hover {
          color: ${color.linkHover};
          text-decoration: underline;
        }
      `}
      href={props.to as string}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link
      className={css`
        text-decoration: none;
        color: ${color.linkDefault};
        &:hover {
          color: ${color.linkHover};
          text-decoration: underline;
        }
      `}
      {...props}
    >
      {children}
    </Link>
  );
}

export default StyledLink;
