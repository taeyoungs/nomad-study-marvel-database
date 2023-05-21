import { css } from '@emotion/css';

import { StyledLink } from 'components';

import { width } from 'constants/common';
import { PATHS } from 'constants/router';

function Header() {
  return (
    <header
      className={css`
        height: 148px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      `}
    >
      <div
        className={css`
          width: ${width.maxPrimary}px;
          margin: 0 auto;
        `}
      >
        <StyledLink to={PATHS.HOME}>
          <img
            src="https://i.ibb.co/2Mnk5fG/logo.webp"
            alt="Marvel Database"
            width={180}
            height={100}
          />
          <h1
            className={css`
              position: absolute !important;
              overflow: hidden;
              clip: rect(0 0 0 0);
              width: 1px;
              height: 1px;
              white-space: nowrap;
            `}
          >
            Marvel Database
          </h1>
        </StyledLink>
      </div>
    </header>
  );
}

export default Header;
