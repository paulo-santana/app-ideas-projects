const binaryInput = document.querySelector("#binaryInput");
const resultOutput = document.querySelector("#result");

binaryInput.addEventListener("input", function() {
  const binary = this.value;
  let result = 0;

  for (let i = 0; i < binary.length; i++) {
    result += binary[binary.length - 1 - i] * 2 ** i;
  }
  resultOutput.textContent = result;
});
