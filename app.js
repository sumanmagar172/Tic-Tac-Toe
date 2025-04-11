let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGame = document.querySelector("#new-game");
let msg = document.querySelector(".msg")
let msgContainer = document.querySelector(".msg-container");

let turn0 =true;

const winpattern = [
    [0, 1, 3],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

 
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // alert("box was clicked");
        if(turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    }); 
});

const disabledAfterWin = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinnner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledAfterWin();
}
  


const checkWinner = () => {
    for (pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val) {
                // console.log("winner", pos1val);
                showWinnner(pos1val);
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);