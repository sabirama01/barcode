let generate= document.getElementById("input");
let barcode = document.getElementById("qrcode");

function generateQRCode() {
   if (generate.value != 0) {
    const barcodeSource = `https://barcodeapi.org/api/qr/${generate.value}`
    barcode.src = barcodeSource
   }
   else barcode.src = "assets/images/no_input.png"
}

function clearInput() {
    generate.value = "";
    barcode.src = "assets/images/no_input.png"
}