const from = document.querySelector("#searchTv");
from.addEventListener("submit", async function (e){
  e.preventDefault();

  removeImg();

  const formInput = from.elements.query;
  const config = {
    params: {
      q: formInput.value
    }
  }
  const res =await axios.get(`https://api.tvmaze.com/search/shows`, config);
  addImg(res.data);

  formInput.value = "";
})

const addImg = (results) => {
  for(let result of results){
    if(result.show.image){
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
}

const removeImg = () => {
  const imgs = document.querySelectorAll("img");
  for(img of imgs){
    img.remove();
  }
}
