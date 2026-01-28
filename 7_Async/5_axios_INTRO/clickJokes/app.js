
const getJoke = async () => {
  const config = {
    headers:{
      Accept: "application/json"
    }
  }
  const res = await axios.get("https://icanhazdadjoke.com/", config)
  return res.data.joke
}

const addJoke = async () => {
  const ul = document.querySelector("#jokes");
  const li = document.createElement("li");
  const jokeText = await getJoke();
  li.append(jokeText);
  ul.append(li);
}

const button = document.querySelector("button");
button.addEventListener("click", addJoke);
