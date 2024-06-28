//1.

// class Selector {
//     constructor(name) {
//       this.name = name;
//       this.styles = {};
//     }
  
//     addProperty(name, value) {
//       this.styles[name] = value;
//     }
  
//     removeProperty(name) {
//       delete this.styles[name];
//     }
  
//     getCSS() {
//       let cssString = `${this.name} {\n`;
//       for (const [property, value] of Object.entries(this.styles)) {
//         cssString += `  ${property}: ${value};\n`;
//       }
//       cssString += '}';
//       return cssString;
//     }
//   }
  
//2.

class Button {
    constructor(width, height, text) {
      this.width = width;
      this.height = height;
      this.text = text;
    }
  
    showBtn() {
      document.write(`<button style="width: ${this.width}px; height: ${this.height}px;">${this.text}</button>`);
    }
  }
  
  class BootstrapButton extends Button {
    constructor(width, height, text, color) {
      super(width, height, text);
      this.color = color;
    }
  
    showBtn() {
      document.write(`<button style="width: ${this.width}px; height: ${this.height}px; color: ${this.color};">${this.text}</button>`);
    }
  }
  let button = new Button(50, 50,'click me');
  button.showBtn();