const req = new XMLHttpRequest();
req.onload = function() {
  console.log("成功");
  const data = JSON.parse(this.responseText);
  console.log(data);
}

req.onerror = function() {
  console.log("失敗");
  console.log(this);
}
req.open("GET", "http://swapi.dev/api/people/1/")
req.send();
