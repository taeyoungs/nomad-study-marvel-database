import { useParams } from 'react-router-dom';
import { css } from '@emotion/css';
import { objectEntries } from '@toss/utils';

import { Text } from 'components';

import { color } from 'constants/common';

import { useCharacter } from './hooks';
import AsideLink from '../AsideLink';
import Category from '../Category';

function Description() {
  const { id } = useParams();
  const { data: character } = useCharacter(Number(id));

  const thumbnailPath = character?.thumbnail.path + '.' + character?.thumbnail.extension;
  const categories = {
    comics: character?.comics,
    series: character?.series,
    stories: character?.stories,
    events: character?.events,
  };

  return character ? (
    <div>
      <Text
        as="h2"
        typography="4xlarge"
        weight={300}
        letterSpacing="0.25px"
        className={css`
          margin: 0 0 16px;
        `}
      >
        {character.name}
      </Text>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          gap: 10px;
        `}
      >
        <div>
          {objectEntries(categories).map(([title, category]) => (
            <Category key={title} title={title} category={category} />
          ))}
        </div>
        <aside>
          <img
            className={css`
              border: 1px solid ${color.border100};
            `}
            src={thumbnailPath}
            alt={character.name}
            height={410}
            width={300}
          />
          <div
            className={css`
              border: 1px solid ${color.border200};
            `}
          >
            <div
              className={css`
                background-color: rgba(181, 183, 207, 0.5);
              `}
            >
              {character.urls.map((characterURLs) => (
                <AsideLink key={characterURLs.type} characterURLs={characterURLs} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  ) : null;
}

export default Description;
