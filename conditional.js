// If condition 
var light = "white"

if(light == "green"){
    console.log("Go!");
}
else if(light == "yellow"){
    console.log("Wait!");
}
else if(light == "red"){
    console.log("Stop!");
} 
else {
    console.log("Invalid light color");
}
console.log("Outside If");


// Switch condition 

var signal = "white"

switch(signal){
    case "green":
        console.log("Go!"); 
        break;

    case "yellow":
        console.log("Wait!"); 
        break;

    case "red":
        console.log("Stop!"); 
        break;

    default:
        console.log("Invalid signal color");
}