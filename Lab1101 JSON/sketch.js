// Isabel McKay
// JSON Lab
// 12 November 2018

// global variables
var data = [];

// loading JSON file data
function preload(){
  data = loadJSON("population.json");
// console.log(data);
// ^^ potential usage?
}

//setup code
  function setup(){
  noCanvas();
  bubbleSort(data);
  console.log(data.countrydata)
}

// ask for help
// how do I make a bar graph??
function draw(){
  // bar graph function here
}

// bubble sort function
  function bubbleSort(data){
    var length = data.length
    for(var i = 0; i < length; i++){
      for(var j = 0; j < (length - i - 1); j++){
        var a = data[j].countrydata.country;
        var b = data[j+1].countrydata.country;
        if(data[j] > dat[j+1]){
          // swapping numbers
          // temp variable
          var temp = data[j];
          data[j] = data[j+1];
          data[j+1] = temp;
        }
      }
    }
  }
  // end of sketch.js
