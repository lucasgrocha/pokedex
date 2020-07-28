const pokemonTypesSelector = (types: any) => {
  const typeNames = [];
  for (const type of types) {
    typeNames.push(type.type.name);
  }

  return typeNames;
};

export default pokemonTypesSelector;
