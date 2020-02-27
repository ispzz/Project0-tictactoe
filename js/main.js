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

  //-will check for winner and display stuff-//
  const checkWinner = function(player) {
    for(let i = 0; i < winningBoxes.length; i++) {
      const currentArr = winningBoxes[i];

      if (currentArr !== "") {
        if (board[currentArr[0]] === board[currentArr[1]] && board[currentArr[1]] === board[currentArr[2]] && board[currentArr[0]] === player) {
          $('.message').html(`${player} is the winner!!`);
          $('.message-div').addClass('appear-message');
          $('#reset-text').text("PLAY AGAIN");
          $('header, footer').addClass('gradient-animate');
          win = true;
        };
      };

      if (!board.includes("")) {
        console.log('tie??');
        $('.message').html(`TIE!! TRY AGAIN`);
        $('#reset-text').text("PLAY AGAIN");
        $('header, footer').addClass('gradient-animate');
        tie = true;
      }
    };
  };


  //-INDEX OF TICTACTOE DIVS-//
  const test1 = $('.smallbox').map(function() {
    return this.id;
  }).get();


  //-PLAYER TURNS-//
  $('.smallbox').click(function() {
    const indexX = $('.smallbox').index(this);

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
            checkWinner('Socks');
          } else {
            player = true;
            board[indexX] = 'Boots';
            $(this).css('background-image', 'url(images/booty-paw.png)');
            $(this).addClass('selectedRed');
            $('.boots-box').effect('bounce', { times: 2 }, 'slow');
            $('.boots-box').css('background', 'rgba(202,243,220,0.6)');
            $('.socks-box').css('background-color', 'white');
            checkWinner('Boots');
          }
        } else {
        console.log('try another box');
      }

    } else $('.reset').effect("shake");
  });


  //-RESET-&&-PLAY AGAIN-//
  $('.reset').click(function() {
    $('.smallbox').removeClass('selectedRed');
    $('header, footer').removeClass('gradient-animate');
    $('.smallbox').css('background-image', '');
    $('.message').html(" ");
    $('.play-again').html(" ");
    $('#reset-text').text("RESET 🔄");
    $('.message-div').removeClass('appear-message');
    $('.boots-box, .socks-box').css('background', 'rgba(255,255,255,0.2)');
    board = ['','','','','','','','',''];
    win = false;
    tie = false;
    player = true;
  });

});//-END-//
