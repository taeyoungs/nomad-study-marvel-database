import { Outlet } from 'react-router-dom';
import { css } from '@emotion/css';

import { color, width } from 'constants/common';

import Header from './Header';

function Layout() {
  return (
    <div>
      <div
        className={css`
          background-image: url('https://i.ibb.co/84Q5MX4/header-background.webp');
          background-size: cover;
          background-position: 50%;
          position: sticky;
          height: 160px;
          top: 0;
          z-index: -2;
          margin-bottom: -160px;
          &::before {
            background-image: linear-gradient(to bottom, rgba(236, 29, 36, 0), 25%, ${color.red});
            bottom: 0;
            position: absolute;
            width: 100%;
            height: 160px;
            display: block;
            content: '';
            z-index: -1;
          }
        `}
      ></div>
      <div
        className={css`
          min-height: 100vh;
        `}
      >
        <Header />
        <main>
          <div
            className={css`
              width: ${width.maxPrimary}px;
              margin: 12px auto 0;
            `}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
