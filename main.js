//Masala
// n natural soni berilgan va progressiyaning dastlabki hadi A bilan ayirmasi D berilgan. Shu arifmetik progressiyaning dastlabki n ta hadidan tashkil topgan massivni hosil qiling 

//A2= A1+D;  //A3=A1+2D  A4=A1+3D A5=A1+4D

var n=8;   // 1,3,5,7
var A=1;    
var D=2;
var c=[]
var b=[]
function progressiya(){

    for(i=1; i<=n; i++){
        b[i]=A+(i-1)*D;
    }

    for(i=1; i<=n; i++){
        c.push(b[i])
    }
    return c
}

console.log(progressiya());