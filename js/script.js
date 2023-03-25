const low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const sym = ['!', '#', '$', '%', '&', '(', ')', '*', '-', '/', '<', '=', '>', '?', '@', '~']
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


const numSwitch = document.getElementById('switch1');
const symSwitch = document.getElementById('switch2');
const uppSwitch = document.getElementById('switch3');
const lowSwitch = document.getElementById('switch4');
const rangeSlider = document.getElementById('len-slider');
const passScreen = document.querySelector('.password-screen p');
const genButton = document.querySelector('.generate-button');
const passwordLengthScreen = document.querySelector('.symbols-count-label .count');
const passwordScreenButton = document.querySelector('.password-screen');

let numSwitchCheck = true;
let symSwitchCheck = false;
let uppSwitchCheck = true;
let lowSwitchCheck = true;

passwordScreenButton.addEventListener("click", () => {
    navigator.clipboard.writeText(passScreen.textContent);
});

function generatePassword() {
    let passwordSymbols = [];
    if (numSwitchCheck === true) {
        passwordSymbols = passwordSymbols.concat(num);
    }
    if (symSwitchCheck === true) {
        passwordSymbols = passwordSymbols.concat(sym);
    }
    if (uppSwitchCheck === true) {
        passwordSymbols = passwordSymbols.concat(upp);
    }
    if (lowSwitchCheck === true) {
        passwordSymbols = passwordSymbols.concat(low);
    }
    passwordSymbols.sort(compareRandom);
    length = passwordLengthScreen.textContent;
    console.log(length);
    result = '';

    for (let i = 0; i < length; i++) {
        result += passwordSymbols[i];
    }

    
    return result;
};

function compareRandom (a, b) {
    return Math.random() - 0.5;
}

rangeSlider.addEventListener("input", () => {
    passwordLengthScreen.textContent = rangeSlider.value;
});

numSwitch.addEventListener("input", () => {
    if (numSwitch.checked) {
        numSwitchCheck = true;
    }
    else {
        numSwitchCheck = false;
    }

});

symSwitch.addEventListener("input", () => {
    if (symSwitch.checked) {
        symSwitchCheck = true;
    }
    else {
        symSwitchCheck = false;
    }

});

uppSwitch.addEventListener("input", () => {
    if (uppSwitch.checked) {
        uppSwitchCheck = true;
    }
    else {
        uppSwitchCheck = false;
    }

});

lowSwitch.addEventListener("input", () => {
    if (lowSwitch.checked) {
        lowSwitchCheck = true;
    }
    else {
        lowSwitchCheck = false;
    }

});

genButton.addEventListener("click", () => {
    password = generatePassword();
    passScreen.textContent = password;
});