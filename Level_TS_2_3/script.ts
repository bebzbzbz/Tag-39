// ======= DOM =======
// ======= Lvl 2_3 =======

const btn = document.querySelector("button");
if(btn) {
    btn.addEventListener("click", changeStyle)
}

const listElements = [...document.getElementsByTagName("li")];
console.log(listElements);

function changeStyle() {
    if(btn) {
        btn.style.color = "#333";
    }

    listElements[0].style.backgroundColor = "#f6c89f";
    listElements[1].style.backgroundColor = "#ffe7d1";
    listElements[2].style.backgroundColor = "#4b8e8d";

    for(const listElement of listElements) {
        listElement.style.color = "#333"
    }
}