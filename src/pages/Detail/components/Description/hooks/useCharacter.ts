import { fetchCharacter } from 'api/character';
import { useFetch } from 'hooks';

const createCharacterCacheKey = (id: number) => `character_${id}`;

function useCharacter(id: number) {
  return useFetch({
    fetcher: () => fetchCharacter(id),
    cacheKey: createCharacterCacheKey(id),
  });
}

export default useCharacter;
