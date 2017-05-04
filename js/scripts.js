//BUISNESS-LOGIC

var cleanText = function(input) {
  return input.replace(/[.,\/#!$%\s@?'<|"+>\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
};

var determineSquare = function(input) {
  var square = {
    rows: 0,
    cols: 0
  };
  square.rows = Math.floor(Math.sqrt(input.length));
  square.cols = Math.ceil(Math.sqrt(input.length));
  return square;
};

//Create an array of arrays "rows" long, which should produce "cols" long quantity of arrays | hello
var determineArray = function(square, input) {
  var output = [];
  var holder = [];
  input = input.split("");
  for (var i = 0; i < input.length; i++) {
    holder.push(input[i]);
    if (holder.length === square.cols || i === input.length - 1) {
      output.push(holder);
      holder = [];
    }
  }
  return output;
}

var cryptoSquare = function(input){
  input = cleanText(input);
  var square = determineSquare(input);
  var output = determineArray(square, input);
  console.log(output);
  return output;
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
