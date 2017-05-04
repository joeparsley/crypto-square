//BUISNESS-LOGIC

var determineSquare = function(input) {
  var square = {
    rows: 0,
    cols: 0
  };
  square.rows = Math.floor(Math.sqrt(input.length));
  square.cols = Math.ceil(Math.sqrt(input.length));
  return square;
};

var cryptoSquare = function(input){
  var square = determineSquare(input);

  return input;
};


//USER-INTERFACE-LOGIC:
$(document).ready(function() {
  $('#user-message').submit(function(e) {
    e.preventDefault();
    var input = $('#user-input').val();
    result = cryptoSquare(input);
    $('#user-output').text(result);
  });
});
