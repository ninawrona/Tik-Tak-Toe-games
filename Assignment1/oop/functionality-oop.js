
//building a factory function for a TikTakToe game
function gameFactory(board){

  //adding an onclick element to each cell of the table
  const cells = document.querySelectorAll("td");
    for (var i = 0; i < cells.length; i++) {
        console.log("event added to: " + cells[i].id);
        const idOfCell = cells[i].id;
        document.getElementById(idOfCell).onclick = function(){
          movePlayer(idOfCell);
        };
      }

    //implementing a function that puts X or O in a specific place in the table
    //placement is our specified space in the table - passed in the argument
    function movePlayer(placement){
      console.log("Player move");
      if(document.getElementById("text").innerHTML === "PLAYER X" && document.getElementById(placement).innerHTML === ""){
        document.getElementById(placement).innerHTML = "X";
        document.getElementById("text").innerHTML = "PLAYER O";
    }
    else if (document.getElementById("text").innerHTML === "PLAYER O" && document.getElementById(placement).innerHTML === ""){
        document.getElementById(placement).innerHTML = "O";
        document.getElementById("text").innerHTML = "PLAYER X";
    }

    checkStrike();
    }


    function checkStrike(){

      //checking if any combinations of X meet the requirements of winning
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
      //checking if any combinations of O meet the requirements of winning
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
      //checking if combinations of O and X do not meet the requirements of winning - then it is a tie
      else if(
      document.getElementById("ML").innerHTML !== "" && document.getElementById("MM").innerHTML !== "" && document.getElementById("MR").innerHTML !== ""
      && document.getElementById("UR").innerHTML !== "" && document.getElementById("UM").innerHTML !== "" && document.getElementById("UR").innerHTML !== ""
      && document.getElementById("DL").innerHTML !== "" && document.getElementById("DM").innerHTML !== "" && document.getElementById("DR").innerHTML !== ""
      ){
          document.getElementById("text").innerHTML = "IT'S A TIE. TRY AGAIN.";
      }
    }

    return {movePlayer};
}


//this is a factory function creating a board for TikTakToe game.

function boardFactory(){
  
    //Creating a div element in html BODY
    const mainDiv = document.createElement("div");

    //Adding an id to a newly created div
    mainDiv.id = "main";

    //Creating an h1 element as a child to "mainDiv"
    const h1 = document.createElement("h1")
    h1.innerText = "Tik-Tak-Toe";
    mainDiv.appendChild(h1);

    const p = document.createElement("p")
    p.id = "text";
    p.innerText = "PLAYER X";
    mainDiv.appendChild(p);
    
    const table = document.createElement("table");
  
    table.id = "myTable";

    mainDiv.appendChild(table)

    const row1 = document.createElement("tr");
    
    row1.id = "row1";
    table.appendChild(row1)

    const UL = document.createElement("td");
    const UM = document.createElement("td");
    const UR = document.createElement("td");

    UL.id = "UL";
    UM.id = "UM";
    UR.id = "UR";

    row1.appendChild(UL);
    row1.appendChild(UM);
    row1.appendChild(UR);

    const row2 = document.createElement("tr");
    row2.id = "row2";
    table.appendChild(row2);

    const ML = document.createElement("td");
    const MM = document.createElement("td");
    const MR = document.createElement("td");

    ML.id = "ML";
    MM.id = "MM";
    MR.id = "MR";

    row2.appendChild(ML);
    row2.appendChild(MM);
    row2.appendChild(MR);

    const row3 = document.createElement("tr");
    row3.id = "row3";
    table.appendChild(row3);

    const DL = document.createElement("td");
    const DM = document.createElement("td");
    const DR = document.createElement("td");

    DL.id = "DL";
    DM.id = "DM";
    DR.id = "DR";

    row3.appendChild(DL);
    row3.appendChild(DM);
    row3.appendChild(DR);

    const button = document.createElement("button");
    button.id = "myButton";
    button.innerText = "RESTART";
    mainDiv.appendChild(button);

    

    //updating the website by adding all created elements
      document.body.append(mainDiv);

      //adding functionality to the button - "myButton"
      document.getElementById("myButton").onclick = function(){

        const cells = document.querySelectorAll("td");

      for (var i = 0; i < cells.length; i++) {
          const idOfCell = cells[i].id;
        document.getElementById(idOfCell).innerHTML = "";
        };
      
        document.getElementById("text").innerHTML = "PLAYER X";
        
      };

      //creating a constance of a factory function - gameFactory
      const game = gameFactory();

    

    return {UL, UM, UR, ML, MM, MR, DL, DM, DR}
}