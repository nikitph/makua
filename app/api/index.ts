import {BASE_URL, INIT_PAGE_SIZE, PAGE_SIZE} from '../config';

export const picsApi = {
  fetchPics: async ({pageParam = 0}) => {
    const response = await fetch(
      `${BASE_URL}?&page=${pageParam}&limit=${
        pageParam > 0 ? PAGE_SIZE : INIT_PAGE_SIZE
      }`,
    );
    return await response.json();
  },
};
