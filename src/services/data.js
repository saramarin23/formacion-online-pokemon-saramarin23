const URL = "http://pokeapi.co/api/v2/pokemon/?limit=25";

const data = () => {
  return fetch(URL).then(res => res.json());
};

export default data;
