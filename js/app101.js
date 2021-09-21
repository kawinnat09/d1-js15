var mark = prompt("Enter Score: ");
var score = parseInt(mark);

if(score >= 80 && score<= 100){
    //console.log("A");
    var grad = "A";
}
else if(score >= 70 && score<= 79){
    //console.log("B");
    var grad = "B";
}
else if(score >= 60 && score<= 69){
    //console.log("C");
    var grad = "C";
}
else if(score >= 50 && score<= 59){
    //console.log("D");
    var grad = "D";
}
else if(score >= 0 && score<= 49){
    //console.log("F");
    var grad = "F";
}
else{
    console.log("Error");
}
console.log("grad");

console.log("End Program");