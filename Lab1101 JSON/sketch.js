// Isabel McKay

// global variables
var data = [];

//setup code
function preload(){
  data = loadJSON("population.json");
//  console.log(data);
}

  function setup(){
  noCanvas();
  bubbleSort(data);
  console.log(data.countrydata)
}

function draw(){
}

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
