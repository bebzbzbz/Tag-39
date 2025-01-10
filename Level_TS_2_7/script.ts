// ======= DOM =======
// ======= Lvl 2_7 =======

const btn = document.querySelector("button");
const wrapper = document.querySelector(".umwickeln")

let counter = 0;

if(btn && wrapper) {
    btn.addEventListener("click", () => {
        const newElement = document.createElement("p"); 
        newElement.textContent = `${counter}`;
        newElement.classList.add("rechteck")

        if(counter % 10 === 0 || counter === 0) {
            newElement.classList.add("weiss")
        }
        
        wrapper.appendChild(newElement);

        counter++;
    });
}