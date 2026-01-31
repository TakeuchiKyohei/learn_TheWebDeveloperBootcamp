// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const container = document.querySelector("#container");

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  pokemon.appendChild(img);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}


