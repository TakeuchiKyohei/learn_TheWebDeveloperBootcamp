axios("https://swapi.dev/api/people/1/")
  .then(res => console.log("成功",res.data))
  .catch(err => console.log("失敗", err));

const swapiPeople = async (id) => {
  try{
    const res = await axios(`https://swapi.dev/api/people/${id}/`);
    console.log("成功", res.data);
  }catch(err){
    console.log("失敗", err);
  }
}

swapiPeople(10);
