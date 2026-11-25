const tempInput = document.getElementById("temp");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convert");
const errorText = document.getElementById("error");
const resultsBox = document.getElementById("results");

const cOut = document.getElementById("c-out");
const fOut = document.getElementById("f-out");
const kOut = document.getElementById("k-out");

function checkInput() {
  const val = tempInput.value.trim();

  if (val === "") {
    errorText.textContent = "";
    return null;
  }

  const num = Number(val);
  if (Number.isNaN(num)) {
    errorText.textContent = "Enter a valid number.";
    resultsBox.style.display = "none";
    return null;
  }

  errorText.textContent = "";
  return num;
}

function convertTemp() {
  const val = tempInput.value.trim();
  if (val === "") {
    errorText.textContent = "Please enter a temperature.";
    resultsBox.style.display = "none";
    return;
  }

  const num = checkInput();
  if (num === null) return;

  const unit = unitSelect.value;
  let c;

  if (unit === "C") {
    if (num < -273.15) {
      errorText.textContent = "Temperature cannot be below absolute zero (-273.15 °C).";
      resultsBox.style.display = "none";
      return;
    }
    c = num;
  } else if (unit === "F") {
    if (num < -459.67) {
      errorText.textContent = "Temperature cannot be below absolute zero (-459.67 °F).";
      resultsBox.style.display = "none";
      return;
    }
    c = ((num - 32) * 5) / 9;
  } else {
    if (num < 0) {
      errorText.textContent = "Kelvin cannot be below 0 K (absolute zero).";
      resultsBox.style.display = "none";
      return;
    }
    c = num - 273.15;
  }

  const f = (c * 9) / 5 + 32;
  const k = c + 273.15;

  errorText.textContent = "";
  cOut.textContent = `Celsius: ${c.toFixed(2)} °C`;
  fOut.textContent = `Fahrenheit: ${f.toFixed(2)} °F`;
  kOut.textContent = `Kelvin: ${k.toFixed(2)} K`;
  resultsBox.style.display = "block";
}

tempInput.addEventListener("input", checkInput);
convertBtn.addEventListener("click", convertTemp);