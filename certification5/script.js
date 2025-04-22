document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-button");
  const pokemonNameDisp = document.getElementById("pokemon-name");
  const pId = document.getElementById("pokemon-id");
  const pWeight = document.getElementById("weight");
  const pHeight = document.getElementById("height");
  const pTypes = document.getElementById("types");
  const hp = document.getElementById("hp");
  const attack = document.getElementById("attack");
  const defense = document.getElementById("defense");
  const specialAttack = document.getElementById("special-attack");
  const specialDefense = document.getElementById("special-defense");
  const speed = document.getElementById("speed");
  const image = document.getElementById("sprite");
  const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

  const fetchPokemon = async (pokemonName) => {
    try {
      const res = await fetch(url.concat(pokemonName));
      if (!res.ok || !input.value) {
        throw new Error("Pokemon not found");
      }
      const data = await res.json();
      const { name, id, weight, height, types, stats, sprites } = data;
      let dataArr = [name, id, weight, height, getTypes(types), getStats(stats), getSprites(sprites)];
      displayData(dataArr);
      console.log(dataArr);
    } catch (err) {
      clearData();
      console.log(err);
      alert("Pokémon not found");
    }
  };

  searchBtn.addEventListener("click", () => {
    clearData();
    const pokemonName = input.value.toLowerCase();
    fetchPokemon(pokemonName);
  });

  const getTypes = (types) => {
    const typesArr = [];
    types.forEach((el) => {
      typesArr.push(el.type.name);
    });
    return typesArr;
  };

  const getStats = (stats) => {
    let statsArr = [];
    stats.forEach((el) => {
      statsArr.push(el.base_stat);
    });
    return statsArr;
  };

  const getSprites = (sprites) => {
    const spritesObj = sprites;
    return spritesObj.front_default;
  };

  const displayData = (dataArr) => {
    pokemonNameDisp.textContent = dataArr[0].toUpperCase();

    pId.textContent = "ID: " + dataArr[1];
    pWeight.textContent = "Weight: " + dataArr[2];
    pHeight.textContent = "Height: " + dataArr[3];

    dataArr[4].forEach((el) => {
      const newEl = document.createElement("div");
      newEl.textContent = el.toUpperCase();
      pTypes.appendChild(newEl);
    });

    hp.textContent = "HP: " + dataArr[5][0];
    attack.textContent = "Attack: " + dataArr[5][1];
    defense.textContent = "Defense: " + dataArr[5][2];
    specialAttack.textContent = "Special Attack: " + dataArr[5][3];
    specialDefense.textContent = "Special Defense: " + dataArr[5][4];
    speed.textContent = "Speed: " + dataArr[5][5];

    const sprite = document.createElement("img");
    sprite.id = "sprite";
    sprite.src = `${dataArr[6]}`;
    document.body.appendChild(sprite);
  };

  const clearData = () => {
    pokemonNameDisp.textContent = "";
    pId.textContent = "";
    pWeight.textContent = "";
    pHeight.textContent = "";
    pTypes.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
    const sprite = document.getElementById("sprite");
    if (sprite) {
      document.body.removeChild(sprite);
    }
  };
});