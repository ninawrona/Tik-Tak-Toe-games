
var player = "x";

function buttonClick(){
    for(var i=0; i< document.getElementsByClassName("tableContent").length; i++){
        document.getElementsByClassName("tableContent")[i].innerHTML = "";
    }
    document.getElementById("text").innerHTML = "PLAYER X"
    player = "x"
} 

function playersMove(placement){
    if(player === "x" && document.getElementById(placement).innerHTML === ""){
        document.getElementById(placement).innerHTML = "X";
        document.getElementById("text").innerHTML = "PLAYER O";
        player = "o"
    }
    else if (player === "o" && document.getElementById(placement).innerHTML === ""){
        document.getElementById(placement).innerHTML = "O";
        document.getElementById("text").innerHTML = "PLAYER X";

        player = "x"
    }

    checkStrike();
}

function checkStrike(){
    var array =  document.getElementsByClassName("tableContent");

    if(document.getElementById("ML").innerHTML === "X" && document.getElementById("MM").innerHTML === "X" && document.getElementById("MR").innerHTML === "X"
    ||
    document.getElementById("UL").innerHTML === "X" &&document.getElementById("UM").innerHTML === "X" &&document.getElementById("UR").innerHTML === "X" 
    ||
    document.getElementById("DL").innerHTML === "X" &&document.getElementById("DM").innerHTML === "X" &&document.getElementById("DR").innerHTML === "X" 
    ||
    document.getElementById("UL").innerHTML === "X" &&document.getElementById("MM").innerHTML === "X" &&document.getElementById("DR").innerHTML === "X" 
    ||
    document.getElementById("UR").innerHTML === "X" &&document.getElementById("MM").innerHTML === "X" &&document.getElementById("DL").innerHTML === "X" 
    ||
    document.getElementById("MM").innerHTML === "X" &&document.getElementById("UM").innerHTML === "X" &&document.getElementById("DM").innerHTML === "X" 
    ||
    document.getElementById("ML").innerHTML === "X" &&document.getElementById("UL").innerHTML === "X" &&document.getElementById("DL").innerHTML === "X" 
    ||
    document.getElementById("MR").innerHTML === "X" &&document.getElementById("UR").innerHTML === "X" &&document.getElementById("DR").innerHTML === "X" ){
        document.getElementById("text").innerHTML = "PLAYER X WINS";
    }

    else if(document.getElementById("ML").innerHTML === "O" && document.getElementById("MM").innerHTML === "O" && document.getElementById("MR").innerHTML === "O"
    ||
    document.getElementById("UL").innerHTML === "O" &&document.getElementById("UM").innerHTML === "O" &&document.getElementById("UR").innerHTML === "O" 
    ||
    document.getElementById("DL").innerHTML === "O" &&document.getElementById("DM").innerHTML === "O" &&document.getElementById("DR").innerHTML === "O" 
    ||
    document.getElementById("UL").innerHTML === "O" &&document.getElementById("MM").innerHTML === "O" &&document.getElementById("DR").innerHTML === "O" 
    ||
    document.getElementById("UR").innerHTML === "O" &&document.getElementById("MM").innerHTML === "O" &&document.getElementById("DL").innerHTML === "O" 
    ||
    document.getElementById("MM").innerHTML === "O" &&document.getElementById("UM").innerHTML === "O" &&document.getElementById("DM").innerHTML === "O" 
    ||
    document.getElementById("ML").innerHTML === "O" &&document.getElementById("UL").innerHTML === "O" &&document.getElementById("DL").innerHTML === "O" 
    ||
    document.getElementById("MR").innerHTML === "O" &&document.getElementById("UR").innerHTML === "O" &&document.getElementById("DR").innerHTML === "O" ){
        
        document.getElementById("text").innerHTML = "PLAYER O WINS";
    }
    else if(
    document.getElementById("ML").innerHTML !== "" && document.getElementById("MM").innerHTML !== "" && document.getElementById("MR").innerHTML !== ""
    && document.getElementById("UR").innerHTML !== "" && document.getElementById("UM").innerHTML !== "" && document.getElementById("UR").innerHTML !== ""
    && document.getElementById("DL").innerHTML !== "" && document.getElementById("DM").innerHTML !== "" && document.getElementById("DR").innerHTML !== ""
    ){
        document.getElementById("text").innerHTML = "IT'S A TIE. TRY AGAIN.";
    }

}