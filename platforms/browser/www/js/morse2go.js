function init(){
  document.getElementById('submitText').addEventListener('click', function(){
    var morseCode = document.getElementById('TextField').value;
    //console.log(morseCode);
    //console.log(morjs.decode(morseCode, {mode: 'simple'}));
    var decodedText = morjs.decode(morseCode, {mode: 'simple'});
    document.getElementById('decode').innerHTML = decodedText;
    responsiveVoice.speak(decodedText, "UK English Male");
    document.getElementById('TextField').value = "";
  });

  document.getElementById('dot').addEventListener('click', function(){
    var morseLetter = document.getElementById('TextField').value = document.getElementById('TextField').value + '.';
  });

  document.getElementById('dash').addEventListener('click', function(){
    var morseLetter = document.getElementById('TextField').value = document.getElementById('TextField').value + '-';
  });

  document.getElementById('space').addEventListener('click', function(){
    var morseLetter = document.getElementById('TextField').value = document.getElementById('TextField').value + ' ';
  });

}

window.addEventListener('load', init);
