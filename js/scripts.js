//BUISNESS-LOGIC

var cleanText = function(input) {
  return input.replace(/[.,\/#!$%@?'<|"+>\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "").toLowerCase();
};

var cleanArray = function(input) {
  for (var i = 0; i < input.length; i++) {
    if (typeof input[i] == "undefined") {
      input.splice(i,1);
      i -= 1;
    }
  }
  return input;
}

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

//Read individual letters in the opposite direction from when they were originally pushed into a new array
var messageArranger = function(square, input) {
  var output = [];
  for (var i = 0; i < square.cols; i++) {
    for (var j = 0; j < square.rows; j++) {
      output.push(input[j][i]);
    }
  }
  return output;
};

//Place a space in new combined array every fifth spot
var spacePlacer = function(input) {
  console.log(input);
  for (var i = 5; i < input.length; i += 5) {
    input.splice(i, 0, " ");
    i += 1;
  }
  return input;
};

var cryptoSquare = function(input){
  input = cleanText(input);
  var square = determineSquare(input);
  var output = determineArray(square, input);
  output = messageArranger(square, output);
  output = cleanArray(output);
  output = spacePlacer(output);
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
