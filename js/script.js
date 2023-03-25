numSwitch = document.getElementById('switch1');
symSwitch = document.getElementById('switch2');
uppSwitch = document.getElementById('switch3');
lowSwitch = document.getElementById('switch4');
rangeSlider = document.getElementById('len-slider');
passScreen = document.querySelector('.password-screen p');
genButton = document.querySelector('.generate-button');
passwordLengthScreen = document.querySelector('.symbols-count-label .count');
passwordScreenButton = document.querySelector('.password-screen');

passwordScreenButton.addEventListener("click", () => {
    navigator.clipboard.writeText(passScreen.textContent);
});

function generatePassword() {
    return 'something';
};

rangeSlider.addEventListener("input", () => {
    passwordLengthScreen.textContent = rangeSlider.value;
});

numSwitch.addEventListener("input", () => {
    if (numSwitch.checked){
        console.log('num is on!');
    }
    else {
        console.log('num is off!');
    }
        
});

symSwitch.addEventListener("input", () => {
    if (symSwitch.checked){
        console.log('sym is on!');
    }
    else {
        console.log('sym is off!');
    }
        
});

uppSwitch.addEventListener("input", () => {
    if (uppSwitch.checked){
        console.log('upp is on!');
    }
    else {
        console.log('upp is off!');
    }
        
});

lowSwitch.addEventListener("input", () => {
    if (lowSwitch.checked){
        console.log('low is on!');
    }
    else {
        console.log('low is off!');
    }
        
});

genButton.addEventListener("click", () => {
    password = generatePassword();
    passScreen.textContent = password;
});