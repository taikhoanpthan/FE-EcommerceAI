const HISTORY_KEY = "viewedHistory";

export const addToHistory = (product) => {
  let history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];

  history = history.filter((p) => p.id !== product.id);
  history.unshift(product);
  if (history.length > 5) history = history.slice(0, 5);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const getHistory = () => {
  return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
};
