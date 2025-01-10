// ======= DOM =======
// ======= Lvl 1_4 =======

function addText() {
    const input = document.querySelector<HTMLInputElement>("#input");
    const outputDiv = document.querySelector("#output");
    
    if(input && outputDiv) {
        const inputValue = input.value;
        
        outputDiv.innerHTML += `<p>${new Date().toLocaleString("de-DE")}: ${inputValue}</p>`;

        input.value = "";
    }
}

const submitBtn = document.querySelector("#submit-btn");

if(submitBtn) {
    submitBtn.addEventListener("click", addText)
}

// ======= Lvl 1_5 =======

const body = document.querySelector("body");

function showURL() {
    if(body) {
        const url = window.location.href;
        const output = document.createElement("p");
        output.textContent = `Die URL der Seite lautet; ${url}`
    
        body.appendChild(output);
    }
}

const showURLBtn = document.querySelector("#show-url-btn");

if(showURLBtn) {
    showURLBtn.addEventListener("click", showURL)
}