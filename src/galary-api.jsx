import axios from "axios";

axios.defaults.baseURL =
  "https://api.unsplash.com/search/photos/?client_id=A8v0Bb3aacHUESvOImzEybmK7eVba5Nv2U_8ETWnhwI&per_page=12";

export const fetchCards = async (searchQuery, currentPage) => {
  // const response = await axios.get(`/search?query=${searchQuery}`);

  const response = await axios.get("", {
    params: {
      query: searchQuery,
      page: currentPage,
    },
  });
  return response.data;
};
