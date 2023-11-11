import axios from "axios";

const API_KEY = "ba3d8a3b5bd5c18d0a448a1bd8741032";

export const getRecentPhotos = async () => {
  try {
    const response = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${API_KEY}&format=json&nojsoncallback=1&safe_search=1`
    );
    return response.data.photos.photo;
  } catch (error) {
    console.error("Error fetching recent photos:", error);
    throw error;
  }
};

export const searchPhotos = async (query) => {
  try {
    const response = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${query}&format=json&nojsoncallback=1&safe_search=1`
    );
    return response.data.photos.photo;
  } catch (error) {
    console.error("Error searching photos:", error);
    throw error;
  }
};
