import axios from "axios";

const API_KEY = "yGKYWcNtRPo1Tz4SPWArNPon3pjum3mqAqkAwFo2CS0";
axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchImg = async <T>(
  searchImg: string,
  pageNumber: number
): Promise<T> => {
  try {
    const response = await axios.get<T>("search/photos/", {
      params: {
        query: searchImg,
        page: pageNumber,
        per_page: 10,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching images:", error.message);
    throw new Error("Failed to fetch images from the API.");
  }
};
