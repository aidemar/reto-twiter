var botonSend = document.getElementById('tex-tweet'); //varaible para  el evento
var containertwit = botonSend[0]; //variable para  textarea
var record = document.getElementsByClassName('box-3')[0]; // variable para la seccion del historial de twitter
var acount = document.getElementById('acount'); // variablepara el contador de los caracteres

botonSend.onsubmit = function(event){ // función para crear el evento
  event.preventDefault();
var tweetText = containertwit.value;

    validation(tweetText);
}
function validation(tweetText) { // función para la validación de caracteres
  if(tweetText == '' || /^\s+$/.test(tweetText)) {
    return false;
  }else if(tweetText.length > 140) {
    return false;
  }else{
    newHist(tweetText);
    containertwit.value = "";
  }
}
var newHist = function(tweetText) { // función para crear nuevo párrafo con tweet
  var newTweet = document.createElement('p');
  var timeTwit =document.createElement('span');
  newTweet.textContent = tweetText;
  newTweet.dataset.tweeted = Date.now(); // obteniendo  la fecha
  newTweet.appendChild(document.createElement('br'));
  newTweet.appendChild(timeTwit);
  record.appendChild(newTweet);
}

var count = function () {
  var tweetText = containertwit.value;
  var numberType = tweetText.length;
  acountReal(numberType);
}

var acountReal = function(numberType) { //funcion par el contador  de catacteres va en retroceso
  acount.textContent =139-(numberType);
  if (numberType == 0) {
    acount.textContent = 140;
  }
}
var hour = function () { //funcion que muetra la hora actual
  var twits =record.getElementsByTagName('p');

   for (var i = 0; i < twits.length; i++) {
       var tweeted = twits[i].dataset.tweeted;
        var longTime = moment(parseInt(tweeted)).format('hh:mm');
        twits[i].getElementsByTagName('span')[0].innerHTML = longTime;

   }
}
setInterval(hour, 2000);

record.getElementsByTagName('p')[0].dataset.tweeted = Date.now();
hour();
