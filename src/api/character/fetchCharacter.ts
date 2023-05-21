import { CharacterSchema } from 'types/character';

import apiClient from '../apiClient';

const API_URL = 'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters';

const fetchCharacter = async (id: number) => {
  const response = await apiClient.get(`${API_URL}/${id}`);

  return CharacterSchema.parse(response.data.results[0]);
};

export default fetchCharacter;
