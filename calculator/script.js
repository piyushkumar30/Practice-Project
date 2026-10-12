let display = document.getElementById("display")
let button = document.querySelectorAll("button")
let first = ""
let operator = ""
let second = ""
button.forEach((button) => {
    button.addEventListener("click", function () {
        let text = button.innerText
        if (text >= "0" && text <= "9") {
            display.value += text
        }
        else if (text === "clr") {
            display.value = ""
            first = ""
            operator = ""
            second = ""
        }
        else if (text === ".") {
            if (!display.value.includes(".")) {
                display.value += ".";
            }
        }
        else if (text === "+" || text === "-" || text === "*" || text === "/") {
            first = Number(display.value)
            operator = text
            display.value = "";
        }
        else if (text === "=") {
            second = Number(display.value)

            if (operator === "+") {
                display.value = first + second
            }
            else if (operator === "-") {
                display.value = first - second
            }
            else if (operator === "*") {
                display.value = first * second
            }
            else if (operator === "/") {
                display.value = first / second
            }
        }

    })
})