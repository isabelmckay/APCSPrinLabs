// global variables
var data;

//setup code
function preload(){
  data = loadJSON("population.json");
//  console.log(data);

}

  function setup(){
  noCanvas();
  console.log(data.population)gotData;
}
function gotData(jData){
   data = jData;
}
function draw(){
  if(data);
  function bubbleSort(){
    for(var i = (data.length - 1); i >= 0; i--){
      for(var j = 0; j < i; j++){
        if(data[j].high < data[j+1].high){
          var temp = data[j]
          data[j+1] = // TEMP: }
     swap(j, j + 1)
   }

        }
      }
    }
  }
}
