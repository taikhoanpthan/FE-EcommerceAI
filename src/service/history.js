const HISTORY_KEY = "viewedHistory";

export const addToHistory = (product) => {
  let history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];

  // Xoá nếu đã có và thêm mới lên đầu
  history = history.filter((p) => p.id !== product.id);
  history.unshift(product);

  // Giới hạn tối đa 5 item
  if (history.length > 5) history = history.slice(0, 5);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const getHistory = () => {
  return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
};
