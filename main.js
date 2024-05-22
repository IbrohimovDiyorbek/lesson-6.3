const input = document.querySelector("#int");
const btn = document.querySelector("#add");
const accept = document.querySelector("#javob");
const form = document.querySelector("#form");


document.addEventListener('DOMContentLoaded', (event) => {
    const savedName = localStorage.getItem('name');
    
    if (savedName) {
        accept.textContent = savedName;
    }

    function saveName() {
        const currentName = input.value;
        accept.textContent = currentName;
        localStorage.setItem('name', currentName);
    }

    input.addEventListener('blur', saveName);
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            saveName();
            input.blur();
        }
    });

    input.value = "";
});