import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import dayjs from 'dayjs';

import { StyledLink, Text } from 'components';

import { PATHS } from 'constants/router';
import { color } from 'constants/common';
import { Character } from 'types/character';

interface CharacterItemProps {
  character: Character;
}

function CharacterItem({ character }: CharacterItemProps) {
  const { id, name, thumbnail, modified } = character;
  const { path, extension } = thumbnail;

  const thumbnailPath = path + '.' + extension;
  const formattedDate = dayjs(modified).format('(MMM DD, YYYY)');

  return (
    <div
      className={css`
        padding: 20px;
      `}
    >
      <div
        className={css`
          text-align: center;
          margin: 0 0 10px;
        `}
      >
        <Link to={`${PATHS.DETAIL}/${id}`}>
          <img
            className={css`
              border: 1px solid ${color.border100};
            `}
            src={thumbnailPath}
            alt={name}
            height={180}
            loading="lazy"
          />
        </Link>
      </div>
      <div
        className={css`
          text-align: center;
        `}
      >
        <Text as="h4" typography="small">
          <StyledLink to={`${PATHS.DETAIL}/${id}`}>{name}</StyledLink>
        </Text>
        <Text typography="small">{formattedDate}</Text>
      </div>
    </div>
  );
}

export default CharacterItem;
