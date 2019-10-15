const URL = "https://pokeapi.co/api/v2/pokemon/?limit=25";

const data = () => {
  return fetch(URL)
    .then(response => response.json())
    .then(console.log(data));
};

export default data;
