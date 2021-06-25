function loadImage() {

    let source = document.getElementById("image").value;
    let img = document.createElement("img");
    img.src = source;
    img.classList.add('normalSizedImage')

    let secondButton = document.getElementById('loadImageButton');

    secondButton.after(img);
    // document.body.appendChild(img);
}