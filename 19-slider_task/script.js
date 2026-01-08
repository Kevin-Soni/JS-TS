let images = {
    img1: "images/img2.png",
    img2: "images/img3.png",
    img3: "images/img4.png"
};

let keys = Object.keys(images);
let index = 0;

let img = document.getElementById("img");

function showimage() {
    img.src = images[keys[index]];
}

function nextimage() {
    if (index < keys.length - 1) {
        index++;
    } else {
        index = 0;
    }
    showimage();
}
function previmage() {
    if (index > 0) {
        index--;
    } else {
        index = keys.length - 1;
    }
    showimage();
}
document.getElementById("next").onclick = nextimage;
document.getElementById("prev").onclick = previmage;

showimage(); //first image

