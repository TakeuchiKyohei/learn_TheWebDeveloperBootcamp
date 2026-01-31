const randomColor = () => {
  const rgb = createRGB();
  document.body.style.backgroundColor = rgb;
  h1.innerText = rgb;

}

const createRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  judgeTextColor(r,g,b);
  return `rgb(${r}, ${g}, ${b})`;
}

const judgeTextColor = (r, g, b) => {
  const total = r + g + b;
  if (total < 200) {
    h1.style.color = 'white';
  }else{
    h1.style.color = 'black';
  }
}

const btn = document.querySelector('#change_btn');
const h1 = document.querySelector('h1');
btn.addEventListener('click', randomColor);
