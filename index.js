function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }

function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }

//   Monday()
//   Tuesday()
//   Wednesday()
//   Thursday()
//   Friday()

//

function runsFileMiles(){
    console.log("Go for a five-mile run");
}


function receivesAFunction(runsFileMiles){
    runsFileMiles();
  }


 function returnsANamedFunction(){
    return function name(){
        console.log("returning my name - Eugene");
    };
 }


 function returnsAnAnonymousFunction(){
    return (function (){});
 }