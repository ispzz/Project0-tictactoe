//=================//
//---TIC-TAC-TOE---//
//=================//

//-DOCUMENT READY-//
$(document).ready(function() {

  //-DECLARING VARIABLES-//
  let player = true;
  const board = ['','','','','','','','',''];
  const winningBoxes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const checkWinner = function() {
    for(let i = 0; i < winningBoxes.length; i++) {
      const currentArr = winningBoxes[i];
      if (currentArr !== "") {
        if (board[currentArr[0]] === board[currentArr[1]] && board[currentArr[1]] === board[currentArr[2]] && board[currentArr[0]] !== "") {
          console.log('a winner has been found lol(but who)');
        }
      } //END CUREEN !""
      if (!board.includes("")) {
        console.log('tie??');
      }
    }//END FOR LOOP
  };// END checkWinner


  //-IDK CALLING THE INDEX OF THE DIVS?-//
  const test1 = $('.smallbox').map(function() {
    return this.id;
  }).get();

  //-CLICKING + PLAYER TURNS-//
  $('.smallbox').click(function() {
    const indexX = $('.smallbox').index(this);
    //testing if it gets the right index of each box
    console.log(`index is ${indexX}`);
    if (board[indexX] === "") {
      if (player === true) {
        player = false;
        board[indexX] = 'X';
        $(this).addClass('selectedRed');
        $('p').html("It's player red's turn!");
        console.log(`it's player one's turn`); //test
        checkWinner();
      } else {
        player = true;
        board[indexX] = 'O';
        $(this).addClass('selectedBlue');
        $('p').html("It's player blue's turn!");
        console.log(`it's player two's turn`); //test
        checkWinner();
      }
    } else {
      console.log('try another box');
    }
  });

  //-RESET-//
  $('.reset').click(function() {
    $('.smallbox').removeClass('selectedRed');
    $('.smallbox').removeClass('selectedBlue');
    $('p').remove();
  });

  //-TEST-//
  console.log(test1);

  $('.test').click(function() {
    console.log(board);
  });

  //if indexX[] = what??
  //for something?.length === 3?? win

//-END-//
});
