// for // check every box then
//if click add class
$(document).ready(function() { //it will run when the document is ready

  const square1 = $('box1');
  const square2 = $('box2');
  const square3 = $('box3');
  const square4 = $('box4');
  const square5 = $('box5');
  const square6 = $('box6');
  const square7 = $('box7');
  const square8 = $('box8');
  const square9 = $('box9');

//if box[i] then click but thats for later
  $('#box1').click(function() {
    $(this).addClass('selectedRed');
  });
  $('#box2').click(function() {
    $(this).addClass('selectedRed');
  });
  $('#box3').click(function() {
    $(this).addClass('selectedRed');
  });
  $('#box4').click(function() {
    $(this).addClass('selectedRed');
  });
  $('#box5').click(function() {
    $(this).addClass('selectedRed');
  });
  $('#box6').click(function() {
    $(this).addClass('selectedRed');
  });
  $('#box7').click(function() {
    $(this).addClass('selectedRed');
  });
  $('#box8').click(function() {
    $(this).addClass('selectedRed');
  });
  $('#box9').click(function() {
    $(this).addClass('selectedRed');
  });

  $('.reset').click(function() {
    $('.smallbox').removeClass('selectedRed');
  });

let turnCounter = 0;
for (let i = 0; i < 9; i++) {
  turnCounter = i%2;
  console.log(`i is at ${i}`);
  if (turnCounter === 0) {
    console.log(`the counter is at ${turnCounter} and is even`);
  } else if (turnCounter === 1) {
    console.log(`the counter is at ${turnCounter} and is odd`);
  }
}


});
