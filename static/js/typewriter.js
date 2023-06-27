// set up text to print, each item in array is new line
var aText = new Array(
">Hi.", 
">I'm Parker."

);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedText");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 200);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }

}




window.onload = function(){
    typewriter();
    setTimeout(function() {
        document.querySelectorAll('.fadeIn').forEach(function(element){
            element.classList.add('show');
    });
    }, 2000);
    setTimeout(function() {
        document.getElementById('downloadLink').click();
    }, 4000);
};