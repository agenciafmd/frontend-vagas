import { api } from "./api";

export interface iPokeDetails {
    map(arg0: (poke: any) => JSX.Element): import("react").ReactNode;
    name?: string;
    url?: string ;
    setResults: React.Dispatch<React.SetStateAction<iPokeDetails | null>>
    find(arg0: (pokes: iPokeDetails) => boolean): iPokeDetails;
}

export interface iPoke {
  
  count: number;
  next: string;
  previous: null;
  results: {
    map(arg0: (poke: any) => JSX.Element): import("react").ReactNode;
    find(arg0: (pokes: iPokeDetails) => boolean): iPokeDetails;
    setResults: React.Dispatch<React.SetStateAction<iPokeDetails | null>>
    name: string;
    url: string ;
  };
}

export const getPokemons = async () => {
  try {
    const { data } = await api.get<iPoke>(`/pokemon`);
    return data.results;
  } catch (err) {
    console.error(err);
  }
};
