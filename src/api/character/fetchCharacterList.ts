import { CharacterListSchema } from 'types/character';

import apiClient from '../apiClient';

const API_URL =
  'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023';

const fetchCharaterList = async () => {
  const response = await apiClient.get(API_URL);

  return CharacterListSchema.parse(response.data.results);
};

export default fetchCharaterList;
