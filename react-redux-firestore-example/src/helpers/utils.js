export const getItemInLocalStorage = key => JSON.parse(localStorage.getItem(key));

export const setItemInLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
