import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46871450-555b57350d048403707859ab8";

export const fetchImages = (query, page = 1, per_page = 12) => {
  return axios
    .get(BASE_URL, {
      params: {
        q: query,
        page,
        key: API_KEY,
        image_type: "photo",
        orientation: "horizontal",
        per_page,
      },
    })
    .then((response) => response.data.hits);
};
