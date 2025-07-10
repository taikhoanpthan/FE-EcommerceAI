// src/api/products.js
import axios from "axios";

const BASE_URL = "https://662a405e67df268010a324e1.mockapi.io/Ecommerce_FE";

export const getAllProducts = () => axios.get(`${BASE_URL}`);

export const updateFavorite = (id, isFavorite) =>
  axios.put(`${BASE_URL}/${id}`, { isFavorite });
