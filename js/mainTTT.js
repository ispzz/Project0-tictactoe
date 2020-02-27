//=================//
//---TIC-TAC-TOE---//
//=================//

//-DOCUMENT READY-//
$(document).ready(function() {

  $('.reset').addClass('gradient-animate');

  //-DECLARING VARIABLES-//
  let player = true; // socks = true, boots = false
  let board = ['','','','','','','','',''];
  let win = false;
  let tie = false;
  const winningBoxes = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];

  const checkWinner = function(player) {
    for(let i = 0; i < winningBoxes.length; i++) {
      const currentArr = winningBoxes[i];
      if (currentArr !== "") {
        if (board[currentArr[0]] === board[currentArr[1]] && board[currentArr[1]] === board[currentArr[2]] && board[currentArr[0]] === player) {
          console.log(`${player} is the winner!!`);
          $('.message').html(`${player} is the winner!!`);
          $('.message-div').addClass('appear-message');
          $('#reset-text').text("PLAY AGAIN");
          $('header, footer').addClass('gradient-animate');
          win = true;
        }
      } //END CURENT !""
      if (!board.includes("")) {
        console.log('tie??');
        $('.message').html(`TIE!! TRY AGAIN`);
        $('#reset-text').text("PLAY AGAIN");
        $('header, footer').addClass('gradient-animate');
        tie = true;
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
    if (!win && !tie) {
    if (board[indexX] === "") {
      if (player === true) {
        player = false;
        board[indexX] = 'Socks';
        $(this).css('background-image', 'url(images/socks-paw.png)')
        $(this).addClass('selectedRed');
        $('.socks-box').css('background', 'rgba(247,210,200,0.6)');
        $('.socks-box').effect('bounce', { times: 2 }, 'slow');
        $('.boots-box').css('background-color', 'white');
        console.log(`it's player one's turn`); //test
        checkWinner('Socks');
      } else {
        player = true;
        board[indexX] = 'Boots';
        $(this).css('background-image', 'url(images/booty-paw.png)');
        $(this).addClass('selectedRed');
        $('.boots-box').effect('bounce', { times: 2 }, 'slow');
        $('.boots-box').css('background', 'rgba(202,243,220,0.6)');
        $('.socks-box').css('background-color', 'white');
        console.log(`it's player two's turn`); //test
        checkWinner('Boots');
      }
    } else {
      console.log('try another box');
    }
  } else $('.reset').effect("shake");
  });

  //-RESET-//  //-PLAY AGAIN-//
  $('.reset').click(function() {
    $('.smallbox').removeClass('selectedRed');
    $('.smallbox').css('background-image', '');
    $('.message').html(" ");
    $('.play-again').html(" ");
    $('.message-div').removeClass('appear-message');
    $('.boots-box, .socks-box').css('background', 'rgba(255,255,255,0.2)');
    board = ['','','','','','','','',''];
    win = false;
    tie = false;
  });

  //-TEST-//
  console.log(test1);


//-END-//
});
