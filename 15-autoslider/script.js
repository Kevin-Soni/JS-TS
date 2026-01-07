let images = [
    "image/img1.png",
    "image/img2.png",
    "image/img3.png",
    "image/img4.png",
    "image/img5.png"
];

let index = 0;

let imageEl = document.getElementById("img");

function showimage(){
    imageEl.src = images[index];
}
showimage();

setInterval(()=> {
    index = (index + 1) % images.length;
    showimage();
}, 2000)