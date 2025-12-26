
// const container = document.querySelector(".container")

// for(let i = 0; i < 10; i++){
//     const box = document.createElement("div");
//     box.classList.add("box");


//     box.innerText = i + 1;
//     box.style.display = "flex";
//     box.style.alignItems = "center";
//     box.style.justifyContent = "center";
//     box.style.fontSize = "26px";
//     box.style.backgroundColor = "gray";

//     container.appendChild(box);
    
// }

const container = document.querySelector(".container")

for(let i = 0; i < 10; i++){
    container.innerHTML += `<div class = "box"><h2>${i}</h2></div>`
}

