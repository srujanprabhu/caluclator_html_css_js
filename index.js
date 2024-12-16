
// caluclator program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function caluclate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

document.addEventListener("keydown",(event) => {
    const key = event.key;
    if (!isNaN(key)) {
        appendToDisplay(key);
    } else if (["+","-","*","/","."].includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter" || key === "=") {
        caluclate();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0,-1);
    } else if (key === "c" || key === "C") {
        clearDisplay();
    }

});