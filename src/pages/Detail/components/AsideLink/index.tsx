import { css } from '@emotion/css';

import { StyledLink } from 'components';

import { color } from 'constants/common';
import { CharacterURL } from 'types/character';
import { capitalize } from 'utils';

interface AsideLinkProps {
  characterURLs: CharacterURL;
}

function AsideLink({ characterURLs }: AsideLinkProps) {
  const { url, type } = characterURLs;

  return (
    <h4
      className={css`
        padding: 9px;
        &:not(:last-child) {
          border-bottom: 1px solid ${color.border200};
        }
      `}
    >
      <StyledLink to={url} external>
        {capitalize(type)}
      </StyledLink>
    </h4>
  );
}

export default AsideLink;
