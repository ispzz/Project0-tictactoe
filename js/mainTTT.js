//=================//
//---TIC-TAC-TOE---//
//=================//

//-DOCUMENT READY-//
$(document).ready(function() {

  //-DECLARING VARIABLES-//
  let player = true; // RED X = true, BLUE O = false
  let board = ['','','','','','','','',''];
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

  const checkWinner = function(player) {
    for(let i = 0; i < winningBoxes.length; i++) {
      const currentArr = winningBoxes[i];
      if (currentArr !== "") {
        if (board[currentArr[0]] === board[currentArr[1]] && board[currentArr[1]] === board[currentArr[2]] && board[currentArr[0]] === player) {
          console.log(`Player ${player} has won`);
          $('.message').html(`Player ${player} has won`);
        }
      } //END CURENT !""
      if (!board.includes("")) {
        console.log('tie??');
        $('.message').html(`TIE!! TRY AGAIN`);
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
        $('.socks-box').css('background-color', 'red');
        $('.boots-box').css('background-color', 'white');
        $('.message').html("It's player red's turn!");
        console.log(`it's player one's turn`); //test
        checkWinner('X');
      } else {
        player = true;
        board[indexX] = 'O';
        $(this).addClass('selectedBlue');
        $('.boots-box').css('background-color', 'blue');
        $('.socks-box').css('background-color', 'white');
        $('.message').html("It's player blue's turn!");
        console.log(`it's player two's turn`); //test
        checkWinner('O');
      }
    } else {
      console.log('try another box');
    }
  });

  //-RESET-//
  $('.reset').click(function() {
    $('.smallbox').removeClass('selectedRed');
    $('.smallbox').removeClass('selectedBlue');
    $('.message').html(" ");
    board = ['','','','','','','','',''];
  });

  //-PLAY AGAIN-//

  //-TEST-//
  console.log(test1);


//-END-//
});
