// global variables
var data = [];

//setup code
function preload(){
  data = loadJSON("population.json");
//  console.log(data);
}

  function setup(){
  noCanvas();
  bubblesort(data);
  console.log(data.population);
}

function draw(){
}

  function bubbleSort(){
    var length = data.length
    for(var i = 0; i < length; i++){
      for(var j = 0; j < (length - i - 1); j++){
        var a = data[j].population.high
        var b = data[j+1].population.high
        if(a > b){
          var temp = data[j]
          data[j] = data[j+1]
          data[j+1] = temp;

        }
      }
    }
  }
