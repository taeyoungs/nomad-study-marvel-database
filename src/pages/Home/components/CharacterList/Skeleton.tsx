import { css } from '@emotion/css';

import { SkeletonBox } from 'components';

const SKELETON_COUNT = 9;

function Skeleton() {
  const skeletons = Array.from({ length: SKELETON_COUNT });

  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      `}
    >
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={css`
            padding: 20px;
          `}
        >
          <div
            className={css`
              margin: 0 0 10px;
              text-align: center;
            `}
          >
            <SkeletonBox width="220px" height="180px" />
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
            `}
          >
            <SkeletonBox
              width="100px"
              height="14px"
              className={css`
                margin: 0 0 6px;
              `}
            />
            <SkeletonBox width="90px" height="14px" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
