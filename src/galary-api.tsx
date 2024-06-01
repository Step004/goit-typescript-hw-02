import axios from "axios";

axios.defaults.baseURL =
  "https://api.unsplash.com/search/photos/?client_id=A8v0Bb3aacHUESvOImzEybmK7eVba5Nv2U_8ETWnhwI&per_page=12";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}
interface UnsplashResponse {
  results: Image[];
  total_pages: number;
}

export const fetchCards = async (
  searchQuery: string,
  currentPage: number
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>("", {
    params: {
      query: searchQuery,
      page: currentPage,
    },
  });

  return response.data;
};
