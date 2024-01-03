const inputButton = document.getElementById("input-button");
const imageInput =  document.getElementById("image-input")

inputButton.addEventListener("click", function() {
  document.getElementById("image-input").click();
});

imageInput.addEventListener("change", function() {
  const displayImage = document.getElementById("display-image");

  if (this.files && this.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      displayImage.src = e.target.result;
    };

    reader.readAsDataURL(this.files[0]);
  }
});