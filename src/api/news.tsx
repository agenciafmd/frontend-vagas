import api from ".";

export interface INews {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}

export const getNewsTopHeadline = async () => {
  const { data } = await api.get<INews[]>(
    `/top-headlines?sources?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  return data;
};

export const getNewsEverything = async () => {
  const { data } = await api.get<INews[]>(
    `/everything?sources?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  return data;
};