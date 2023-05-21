import { css } from '@emotion/css';

import { StyledLink } from 'components';

import { PATHS } from 'constants/router';

function DefaultFallback() {
  return (
    <section
      className={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        justify-content: center;
        padding: 30px;
      `}
    >
      <img src="https://i.ibb.co/2WKNGjz/iron-man.png" alt="iron-man" width={100} height={100} />
      <h2
        className={css`
          font-size: 22px;
          font-weight: 700;
        `}
      >
        Something went wrong.
      </h2>
      <div>Please refresh the page or click the link below to go home.</div>
      <StyledLink to={PATHS.HOME} replace>
        Go home
      </StyledLink>
    </section>
  );
}

export default DefaultFallback;
