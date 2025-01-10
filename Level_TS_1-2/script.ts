// ======= DOM =======
// ======= Lvl 1_2 =======

function changeBG() {
    const examples = [...document.getElementsByClassName("example")];

    for(const example of examples) {
        example.classList.toggle("bg");
    }
}

const btn = document.querySelector("button");
if(btn) {
    btn.addEventListener("click", changeBG)
}