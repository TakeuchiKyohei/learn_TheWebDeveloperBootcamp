// "http://swapi.dev/api/people/1/"

console.log("Fetch API");
fetch("http://swapi.dev/api/people/1/")
  .then((res) => {
      console.log("成功", res);
      return res.json();
    })
    .then((data) =>{
        console.log(data);
    })
    .catch((err) =>{
        console.log("失敗", err);
      })
      
const swapiPeople = async () => {
  try{
    console.log("Fetch+async API");
    const res = await fetch("http://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("http://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  }catch(err){
    console.log("失敗", err);
  }
}

swapiPeople();
