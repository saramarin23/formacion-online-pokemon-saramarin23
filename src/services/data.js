const URL = "http://pokeapi.salestock.net/api/v2/pokemon/?limit=25";

const data = () => {
  return fetch(URL).then(res => res.json());
};

// console.log(data);

export default data;
