// # ======= DOM =======
//  ======= Lvl 1_2 =======

const infoDiv = document.getElementById("info");

if(infoDiv) {
    infoDiv.innerHTML = `<h1>Hello World!</h1>`;
    infoDiv.innerHTML += `<h2>How are you?</h2>`;
}

const container = document.getElementById("container");
const paragraph = document.createElement("p");
paragraph.textContent = "This is a paragraph";
container?.appendChild(paragraph);

const input = document.createElement("input");
input.setAttribute("type", "text");
container?.appendChild(input);

//  ======= Lvl 1_3 =======

const gallery = document.getElementById("gallery");

const figureArray : Element[] = [];
for(let i = 0; i < 3; i++) {
    const figure = document.createElement("figure");
    gallery?.appendChild(figure);
    figureArray.push(figure);
}

const textsArray : Element[] = [];
for(const figure of figureArray) {
    const img = document.createElement("img");
    figure.appendChild(img);
    img.src = "./img/wurm.png";
    img.style.height = "250px";

    const text = document.createElement("p");
    figure.appendChild(text);
    textsArray.push(text)
}

for(let i = 0; i < 3; i++) {
    textsArray[i].textContent = `Fig. ${i + 1}`
}