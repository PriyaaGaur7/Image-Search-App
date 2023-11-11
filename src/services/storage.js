// storage.js
const STORAGE_KEY = "searchQueries";

export const saveSearchQuery = (query) => {
  const savedQueries = getSearchQueries();
  savedQueries.push(query);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedQueries));
};

export const getSearchQueries = () => {
  const savedQueries = localStorage.getItem(STORAGE_KEY);
  return savedQueries ? JSON.parse(savedQueries) : [];
};
