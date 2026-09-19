// Switch
// let num1=100
// let num2=10
// let op=prompt('Enter a value')
// switch(op){
//     case '+':console.log(`The addition is : ${num1+num2}`);
// /

// Functions
// Names Function

// function deo(){
//     console.log("Hello")
// }
// deo();

// // Anonymous
//  let gr=function(a){
//     console.log(`Hello Boss Kaka ${a}`);
// }
// gr('UTA');
// gr('KA');

// // IIF
// (function(){
//     console.log("Good Morning!");
// })();


// Nested Function

// function parent(){
//     let pland=20;
//     let house=15;
//     console.log(`Parent Properties ${pland} acres of land and ${house}`);
//     function child(){
//         let cland=10;
//         let chouse=15;
//         console.log(`Child Properties ${cland+pland} acres and ${chouse}`);
        
//     }
//     return child;
// }parent()();  //javascript currying



// ! Arrow Function: simple sintax ES6 Feature of JS

// syntax:(parametrs)=>{code}

// let add=(a)=> a+a
// console.log(add(10))


// let user=()=>{
//     let age=21;
//     let name='Srujan Kanaka';
//     return `Myself ${name} and My age is ${age}`;

// }
// console.log(user())

// ! Higher Order Function

// function calculate(a,b,task){
//    let res= task(a,b);
//    return res;
// }


// console.log(calculate(10,20,function(x,y){return x+y}));

// let mul=calculate(3,4,(p,q)=>p*q);
// console.log(mul)

// let sub=calculate(10,5,(p,q)=>p-q);
// console.log(sub)

// let div=calculate(100,10,(p,q)=>p/q);
// console.log(div)


//  Genarator Function: yield keyword 

// function* generate(){
//     yield 123;
//     yield 'ram';
//     yield true;
//     yield '54334.43';
// }
// //next and value
// let res=generate();

// for(i=0;i<4;i++){
//     console.log(res.next().value);
// }



function det(user,add){
    return `Hello ${user} and address is ${add}`;
}
console.log(det(prompt('Enter a name'),'Gadihalli'));
