// ======= DOM =======
// ======= Lvl 1_1 =======

const btn = document.querySelector("button");
const input = document.querySelector<HTMLInputElement>("#inputText");
const shoppingList = document.getElementById("myList");

if(btn && input && shoppingList) {
    btn.addEventListener("click", function() {
        const item = input.value;

        if(item !== "") {
            const newItem = document.createElement("p");
            newItem.textContent = item.trim();
    
            shoppingList.appendChild(newItem);
            input.value = "";
        }
    })
}