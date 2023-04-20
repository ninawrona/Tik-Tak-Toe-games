function reset(){
    let game = {
        Xplaces: [],
        Oplaces: [],
        currentPlayer: "X",
        winner: false
    }

    putGameInDom(game);
    return game;
}

function putGameInDom(game){
    document.getElementById("main").replaceChildren(renderGame(game));
    if(document.getElementById("button") == null){
     document.getElementById("bottom").appendChild(renderResetButton());
    }
}

function renderGame(game){
    let boxId = 0;
    let table = document.createElement("table");
    table.className = "gameTable";
    table.id = "gameTable";
    for(let i = 0; i<3; i++){
        let row = table.appendChild(document.createElement("tr"))
            for(let j = 0; j<3; j++){
                let box = row.appendChild(renderBox(game, boxId));
                boxId++;
            }
            table.appendChild(row);
    }

    return table;

}

function renderBox(game, boxId){
    let box = document.createElement("td");
    box.id = boxId;
    const boxText = document.createTextNode(findSquareContent(game, boxId));
    box.appendChild(boxText);
    let click = () => this.move(game, boxId);
    box.addEventListener("click", click, true);
    return box;
}

// This is a function to find what text/content should be inside
// of a square in the game, given the game and the index of the square.
// It checks whether the index of the square is in one of the
// arrays of places of either player (O places or X places).
// If it is in none, it returns an empty string.
function findSquareContent(game, boxId) {
    if (game.Oplaces.includes(boxId)) {
        return "O";
    }
    else if (game.Xplaces.includes(boxId)) {
        return "X";
    }
    else {
        return "";
    }
}

function move(game, boxId){

    if(game.winner){
        return;
    }

    if(document.getElementById(boxId).innerText != ""){
        return;
    }

    let newGame = game;

    if(newGame.currentPlayer == "X"){
        //document.getElementById(boxId).innerHTML = "X";
        newGame.Xplaces.push(boxId);
        console.log("Xplaces: " + newGame.Xplaces);
    }
    else if(newGame.currentPlayer == "O"){
        //document.getElementById(boxId).innerHTML = "Y";
        newGame.Oplaces.push(boxId);
        console.log("Oplaces: " + newGame.Oplaces);
    }
    
    let final = checkCombination(newGame);

    putGameInDom(final);

    if(final.winner){
        blockGame(final);
    }
    return newGame;
}

function checkCombination(game){
    let winningCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    if (game.currentPlayer == "X"){
        for(let combination of winningCombination){
            //checks if in array of Xplaces you can find
            //any of the winning combinations
            if(combination.every((val) => game.Xplaces.includes(val))){
                let winningGame = {
                    Xplaces: game.Xplaces,
                    Oplaces: game.Oplaces,
                    currentPlayer: "X",
                    winner: true
                }
                console.log("X is a winner")
                
                return winningGame;
            }
        }

        return changeOfCurrentPlayer = {
            Xplaces: game.Xplaces,
            Oplaces: game.Oplaces,
            currentPlayer: "O",
            winner: false
        };
    }else if (game.currentPlayer == "O"){
        for(let combination of winningCombination){
            //checks if in array of Xplaces you can find
            //any of the winning combinations
            if(combination.every((val) => game.Oplaces.includes(val))){
                let winningGame = {
                    Xplaces: game.Xplaces,
                    Oplaces: game.Oplaces,
                    currentPlayer: "O",
                    winner: true
                }
                console.log("O is a winner")
                return winningGame;
            }

        }

        return changeOfCurrentPlayer = {
            Xplaces: game.Xplaces,
            Oplaces: game.Oplaces,
            currentPlayer: "X",
            winner: false
        };
    }
} 

function renderResetButton(){
    let button = document.createElement("button");
    button.id = "button";
    button.innerText = "RESET";
    let click = () => reset();
    button.addEventListener("click", click);
    return button;
}


let game = reset();
