let audioTurn = new Audio("tic.wav")
let gameover = new Audio("win.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

const checkWin = ()=>{                                                                 // Function to check for a win
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [                                                                         //winning elements
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            gameover.play();                                                                     //playing audio when the gamae is over
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";                 //showing the image
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{                                                           //used to iterate each element in an array
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{                                           //used to attach eventlistener to dom elements also used for specific events such sa click,keepup and submit
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();                                                                 //changing turn
            audioTurn.play();                                                                   //playing audio for each turn
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;                 //for changing the turn for element
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');                                       //for selesting each of the boxes in the grid
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";               //making disappear the image
})