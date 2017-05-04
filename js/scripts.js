//BUISNESS-LOGIC

var cryptoSquare = function(input){
return input;
}



//USER-INTERFACE-LOGIC:
$(document).ready(function() {
  $('#user-message').submit(function(e) {
    e.preventDefault();

    var input = $('#user-input').val();

    result = cryptoSquare(input)

    $('#user-output').text(result);
  });
});
