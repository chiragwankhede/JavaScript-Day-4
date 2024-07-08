console.log("Hello");

// Q1 -Lexical Scope - 

// function fn(){
//     var myName = "My name is Chirag";

// };
// console.log(myName);
// fn();


// Q2 - Closure - 

//  Global Scope            
function user (){
var content = "Chirag is my name"         
// Inner Scope 2 

function Display(){
    console.log(content);        // Inner Scope
}
Display();
};

user();


// Q3 - Closure Scope Chain - 

// GLobal Scope
var a= 10

function sum(b){
    return function(c){
        return function(d){
                                        // Outer Function Scope
            return function(e){
                return  a+b+c+d+e;       // Local Scope
            }
        }
    }
}


console.log(sum(10)(5)(5)(7));


// Q4 - Block scope and set timeout- 


for (var i=0; i<4;i++){

    function time(i){
        setTimeout(function log(){
            return console.log(i)},i*1000)
    }
    time(i);
    }

