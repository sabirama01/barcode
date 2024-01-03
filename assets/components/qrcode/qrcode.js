let generate= document.getElementById("input");
let qrcode = document.getElementById("qrcode");

window.addEventListener('load', function() {qrcode.src = "../../images/no_input.png"});

function generateQRCode() {
   if (generate.value != 0) {
    const barcodeSource = `https://barcodeapi.org/api/qr/${generate.value}`
   return qrcode.src = barcodeSource
   }
   else return barcode.src = "../../images/no_input.png"
}

function clearInput() {
    generate.value = "";
   return qrcode.src = "../../images/no_input.png"
}

const data = document.getElementById('data')
