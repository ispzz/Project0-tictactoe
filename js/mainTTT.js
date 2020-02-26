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

  //-IDK CALLING THE INDEX OF THE DIVS?-//
  const test1 = $('.smallbox').map(function() {
    return this.id;
  }).get();

  //-CLICKING + PLAYER TURNS-//
  //how to only let it select boxes without class(?)
  $('.smallbox').click(function() {
    const indexX = $('.smallbox').index(this);
    //testing if it gets the right index of each box
    console.log(`index is ${indexX}`);
    if (player === true) {
      player = false;
      board[indexX] = 'X';
      $(this).addClass('selectedRed');
      $('p').html("It's player red's turn!");
      console.log(`it's player one's turn`); //test
    } else {
      player = true;
      board[indexX] = 'O';
      $(this).addClass('selectedBlue');
      $('p').html("It's player blue's turn!");
      console.log(`it's player two's turn`); //test
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

//-END-//
});
