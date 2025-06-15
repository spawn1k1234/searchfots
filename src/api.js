import axios from "axios";

const PIXABAY_API_KEY = "46871450-555b57350d048403707859ab8";
const GIPHY_API_KEY = "142t8sEtvIhs2XZ5JlZoKdEYzgUh8Pys";

export const fetchImages = async (
  query,
  page = 1,
  per_page = 12,
  mode = "photo"
) => {
  if (mode === "gif") {
    const offset = (page - 1) * per_page;
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: GIPHY_API_KEY,
        q: query,
        limit: per_page,
        offset,
        rating: "pg",
        lang: "en",
      },
    });

    return response.data.data.map((gif) => ({
      id: gif.id,
      webformatURL: gif.images.fixed_width.url,
      largeImageURL: gif.images.original.url,
    }));
  } else {
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: PIXABAY_API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        page,
        per_page,
      },
    });

    return response.data.hits.map((img) => ({
      id: img.id,
      webformatURL: img.webformatURL,
      largeImageURL: img.largeImageURL,
    }));
  }
};
