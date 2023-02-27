class Converter {
  constructor(toConvert, isDecimal, isBinary, isHexadecimal, isOctal) {
    this.toConvert = toConvert;
    this.isBinary = isBinary;
    this.isOctal = isOctal;
    this.isDecimal = isDecimal;
    this.isHexadecimal = isHexadecimal;
    this.clear();
  }

  clear() {
    this.clearToConvert = "0";
    this.clearBinary = "";
    this.clearDecimal = "";
    this.clearOctal = "";
    this.clearHexadecimal = "";
  }

  delete() {
    if (this.clearToConvert !== "0") {
      if (this.clearToConvert.length == 1) {
        this.clear();
      } else {
        this.clearToConvert = this.clearToConvert.toString().slice(0, -1);
        this.clearBinary = Number(this.clearToConvert).toString(2);
        this.clearOctal = Number(this.clearToConvert).toString(8);
        this.clearDecimal = Number(this.clearToConvert).toString(10);
        this.clearHexadecimal = Number(this.clearToConvert).toString(16);
      }
    }
  }

  appendNumber(number) {
    if (this.clearToConvert.length == 1 && this.clearToConvert == "0") {
      this.clearToConvert = "";
    }
    this.clearToConvert = this.clearToConvert.toString() + number.toString();
    this.clearBinary = Number(this.clearToConvert).toString(2);
    this.clearOctal = Number(this.clearToConvert).toString(8);
    this.clearDecimal = Number(this.clearToConvert).toString(10);
    this.clearHexadecimal = Number(this.clearToConvert).toString(16);
  }

  updateScreen() {
    this.toConvert.innerText = this.clearToConvert;
    this.isDecimal.innerText = "DEC: " + this.clearDecimal;
    this.isBinary.innerText = "BIN: " + this.clearBinary;
    this.isOctal.innerText = "OCT: " + this.clearOctal;
    this.isHexadecimal.innerText =
      "HEX: " + this.clearHexadecimal.toUpperCase();
    console.log(this.clearToConvert.length);
  }
}

const numberButtons = document.querySelectorAll("[data-nums]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const solveButton = document.querySelector("[data-solve]");
const toConvert = document.querySelector("[data-to-convert]");
const isDecimal = document.querySelector("[data-to-dec]");
const isHexadecimal = document.querySelector("[data-to-hex]");
const isBinary = document.querySelector("[data-to-bin]");
const isOctal = document.querySelector("[data-to-oct]");

const convertNumberSystem = new Converter(
  toConvert,
  isDecimal,
  isBinary,
  isHexadecimal,
  isOctal
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    convertNumberSystem.appendNumber(button.innerText);
    convertNumberSystem.updateScreen();
  });
});

clearButton.addEventListener("click", (button) => {
  convertNumberSystem.clear();
  convertNumberSystem.updateScreen();
});

deleteButton.addEventListener("click", (button) => {
  convertNumberSystem.delete();
  convertNumberSystem.updateScreen();
});
