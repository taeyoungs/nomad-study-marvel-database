import { Suspense } from 'react';
import { css } from '@emotion/css';

import { color } from 'constants/common';

import { CharacterList, CharacterListFallback } from './components';

function Home() {
  return (
    <section
      className={css`
        padding: 24px 36px;
        min-height: 480px;
        border-radius: 3px;
        background-color: ${color.white};
      `}
    >
      <h2
        className={css`
          font-size: 36px;
          letter-spacing: 0.25px;
          line-height: 1.25;
          font-weight: 300;
        `}
      >
        Home
      </h2>
      <h3
        className={css`
          padding: 10px 0;
          margin: 10px 0;
          text-align: center;
          background-color: ${color.black};
          color: ${color.white};
          font-size: 20px;
          font-weight: bold;
        `}
      >
        THIS WEEK'S CHARACTERS
      </h3>
      <Suspense fallback={<CharacterListFallback />}>
        <CharacterList />
      </Suspense>
    </section>
  );
}

export default Home;
