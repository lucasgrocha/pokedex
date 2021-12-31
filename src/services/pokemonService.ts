import api from "./api";

const pokemonService = {
  index: (activePage: number) =>
    api.get("/pokemon", {
      params: { offset: (activePage - 1) * 10, limit: 10 },
    }),
  show: (searchTerm: string | undefined) => (
    api.get(`/pokemon/${searchTerm}`)
  )
};

export default pokemonService;
