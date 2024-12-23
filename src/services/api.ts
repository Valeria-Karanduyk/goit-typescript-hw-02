import axios from "axios";

const API_KEY = "yGKYWcNtRPo1Tz4SPWArNPon3pjum3mqAqkAwFo2CS0";
axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchImg = async <T>(
  searchImg: string,
  pageNumber: number
): Promise<T | undefined> => {
  const params: Record<string, string> = {
    query: searchImg,
    page: pageNumber.toString(),
    per_page: "10",
    client_id: API_KEY,
  };
  try {
    const response = await axios.get(
      `search/photos/?${new URLSearchParams(params).toString()}`
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
