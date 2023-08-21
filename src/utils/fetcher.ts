import axios from "axios";

export const BASE_URL = process.env.REACT_APP_POKEMON_API_URL;

const axiosIntance = axios.create({
  baseURL: BASE_URL,
});

export const multipleFetcher = async <T>(urls: string[]) => {
  const requests = urls.map(async (url) => {
    const response = await axios.get<T>(url);
    return response.data;
  });
  const results = await Promise.all(requests);
  return results;
};

export const fetcher = async (url: string) => {
  const res = await axiosIntance.get(url);
  return res.data;
};
