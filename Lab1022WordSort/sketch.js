// setup code here
var txt;

function preload(){
  // p5 function named LoadStrings
  txt = loadStrings("words.txt");
}
function setup() {
noCanvas();
console.log("before bubble sorting ");
console.log(txt);
myBubbleSort(txt);
console.log("after bubble sorting");
console.log(txt);
}

// sorting function
function myBubbleSort(){
  for(var i = txt.length - 1; i >= 1; i-- ){
    for(var j = 0; j < txt.length; j++ ){
      // defining i and j
      right_element = txt[i];
      left_element = txt[j];
      // if statement states when they should swap
if(right_element< left_element){
  // calling swap function
  swap(i, j);
}

}


}
}

// function that swaps the words
function swap(i, j){
   var temp = txt[i];
   txt[i] = txt[j];
   txt[j] = temp
}
