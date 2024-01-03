let generate = document.getElementById("code-to-generate");
let barcode = document.getElementById("barcode");

function generateBarcode() {
  if (navigator.onLine) {
    if (generate.value != "") {
      const barcodeSource = `https://barcodeapi.org/api/code128/${generate.value}`;
      barcode.src = barcodeSource;
    } else {
      barcode.src = "assets/images/no_input.png";
    }
  } else {
    document.querySelector(".main").innerHTML = "<h1>ERROR 404. NO INTERNET ACCESS</h1>";
  }
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    generateBarcode();
  }
});

function clearInput() {
  generate.value = "";
  generateBarcode();
}
