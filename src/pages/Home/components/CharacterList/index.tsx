import { css } from '@emotion/css';

import { fetchCharacterList } from 'api/character';
import { useFetch } from 'hooks';

import CharacterItem from '../CharacterItem';

function CharacterList() {
  const { data: characters = [] } = useFetch({
    fetcher: fetchCharacterList,
    cacheKey: 'CharacterList',
  });

  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      `}
    >
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
