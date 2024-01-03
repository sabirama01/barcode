let generate = document.getElementById("code-to-generate");
let barcode = document.getElementById("barcode");

window.addEventListener('load', function() {barcode.src = "assets/images/no_input.png"});

function generateBarcode() {
  if (navigator.onLine) {
    if (generate.value != "") {
      const barcodeSource = `https://barcodeapi.org/api/code128/${generate.value}`;
      return barcode.src = barcodeSource;
    } else {
     return barcode.src = "assets/images/no_input.png";
    }
  } else {
   return document.querySelector(".main").innerHTML = "<h1>ERROR 404. NO INTERNET ACCESS</h1>";
  }
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    return generateBarcode();
  }
});

function clearInput() {
  generate.value = "";
 return generateBarcode();
}
