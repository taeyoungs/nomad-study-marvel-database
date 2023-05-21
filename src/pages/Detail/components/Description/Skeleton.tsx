import { css } from '@emotion/css';

import { SkeletonBox } from 'components';

const SKELETON_COUNT = 10;

function Skeleton() {
  const skeletons = Array.from({ length: SKELETON_COUNT });

  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        gap: 10px;
      `}
    >
      <div>
        <div
          className={css`
            margin: 0 0 16px;
          `}
        >
          <SkeletonBox width="100px" height="45px" />
        </div>
        <div>
          <div
            className={css`
              margin: 0 0 16px;
            `}
          >
            <SkeletonBox width="80px" height="31.5px" />
          </div>
          <ul>
            {skeletons.map((_, index) => (
              <li key={index}>
                <SkeletonBox width="250px" height="21px" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <SkeletonBox width="300px" height="410px" />
      </div>
    </div>
  );
}

export default Skeleton;
