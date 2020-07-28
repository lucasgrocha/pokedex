import api from "./api";

const pokemonService = {
  index: () => api.get("/pokemon", { params: { offset: 0, limit: 10 } }),
};

export default pokemonService;
