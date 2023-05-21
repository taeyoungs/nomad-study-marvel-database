import { Suspense } from 'react';
import { css } from '@emotion/css';

import { ErrorBoundary } from 'components';

import { color, width } from 'constants/common';

import { Description, DescriptionFallback } from './components';

function Detail() {
  return (
    <section
      className={css`
        padding: 24px 36px;
        min-height: 480px;
        border-radius: 3px;
        background-color: ${color.white};
        width: ${width.maxSecondary}px;
        margin: 0 auto;
      `}
    >
      <ErrorBoundary>
        <Suspense fallback={<DescriptionFallback />}>
          <Description />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}

export default Detail;
