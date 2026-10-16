let button = document.querySelectorAll(".box");
let winner = document.getElementById("h1")
let resetbtn = document.getElementById("reset-btn")
let newgamebtn = document.getElementById("start-btn")
let turn1 = document.getElementById("turn")
let newgamebtn2 = document.getElementById("start-btn2")


let arr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
let turn = true
button.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.fontSize = "50px"
        btn.style.color = "black"
        if (turn === true) {
            btn.innerText = "X"
            btn.style.color = "#E63946"
            turn = false
            turn1.innerText = "'O's Turn"
        } else {
            btn.innerText = "O"
            btn.style.color = "#457B9D"
            turn = true
            turn1.innerText = "'X's Turn"
        }
        btn.disabled = true
        getwinner()

    })

})

function getwinner() {
    for (let pattern of arr) {
        let post1 = button[pattern[0]].innerText
        let post2 = button[pattern[1]].innerText
        let post3 = button[pattern[2]].innerText

        if (post1 != "" && post2 != "" && post3 != "") {
            if (post1 === post2 && post2 === post3) {
                h1.innerText = `${post1} wins!  `;

                buttondisable()
                end()
            }
        }
    }
}
function buttondisable() {
    button.forEach((btn) => {
        btn.disabled = true
    })
}
newgamebtn.addEventListener("click", game)
resetbtn.addEventListener("click", game)

function game() {
    button.forEach((btn) => {
        btn.innerText = ""
        btn.disabled = false
    })
    turn = true
    winner.innerText = ""
}
newgamebtn2.style.display = 'none'
function end() {
    turn1.style.display = 'none'
    button.forEach((e) => {
        e.style.display = 'none'
    })
    resetbtn.style.display = 'none'
    newgamebtn.style.display = 'none'
    newgamebtn2.style.display = "block"
    winner.style.display = 'block'
    newgamebtn2.addEventListener("click", () => {
        gamestart()
        game()
    })

}
function gamestart() {
    turn1.style.display = 'block'
    button.forEach((e) => {
        e.style.display = 'block'
    })
    resetbtn.style.display = 'block'
    newgamebtn.style.display = 'block'
    newgamebtn2.style.display = 'none'
    winner.style.display = 'none'
}

