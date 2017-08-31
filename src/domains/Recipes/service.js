import getJsonp from 'utils/getJsonp';

export const fetchRecipes = async (queryString = '') => {
  const data = await getJsonp(`http://www.recipepuppy.com/api/?q=${encodeURIComponent(queryString)}`);

  return data.results;
};
