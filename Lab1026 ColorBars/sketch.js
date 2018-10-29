// setup code here
var txt;

function preload(){
  // p5 has a function named "loadStrings"
  txt = loadStrings("words.txt");
}
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  myBubbleSort(txt)
}


function myBubbleSort(){
