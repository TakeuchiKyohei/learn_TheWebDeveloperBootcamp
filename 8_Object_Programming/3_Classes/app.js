class Color {
  constructor(r,g,b,name){
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerTextColor(){
    const {r,g,b} = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb () {
    return `rgb(${this.innerTextColor()})`;
  }
  rgba (a = 1.0) {
    return `rgba(${this.innerTextColor()}, ${a})`;
  }
  hex(){
    const {r,g,b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const c1 = new Color(255,0,0,"tomato");
