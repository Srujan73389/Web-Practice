// let emp={
//     eid:123,
//     ename:"kanaka",
//     sal:40000

// }
// console.log(emp)
// console.log(emp.eid)
// console.log(emp.ename)

// // ! JSON.stringify():convert object js  to json object
// let strobj=JSON.stringify(emp)
// console.log(strobj)
// console.log(strobj.ename)
// // ! JSON.parse(): convert json object to js object

// let newEMp=JSON.parse(strobj)
// console.log(newEMp)
// console.log(newEMp.ename)





// ! asynchrounous JS

// ! Time delays

// console.log("Start");

//  ? setTimeout(function,delay)
// setTimeout(function(){
//     console.log("Hello students, good afternoon....");
// },3000)

// console.log("End");



console.log("Start");

//  ? setInterval(function,delay)
setInterval(function(){
    console.log("Hello students, good afternoon....");
},2000)

console.log("End");

// ! clearTimeout()
// let greet = setTimeout(()=>{
//     document.getElementById('demo').innerText = "Good evening..."
// },3000)

// let btn = document.querySelector('button')
// console.log(btn);
// btn.addEventListener('click',()=>{
//     clearTimeout(greet)
// })

// ! clearInterval()
// let displayTime = setInterval(()=>{
//     let d = new Date();
//     document.getElementById('demo').innerText = d.toLocaleTimeString();
// },1000)

// let btn = document.querySelector('button')
// btn.addEventListener("click",()=>{
//     clearInterval(displayTime)
// })


// console.log('start')

// ! promises
// is_prepared=true=attendmock
// is_prepared=false=not attend mock
// let myPromise=new Promise((resolve,reject)=>{
//     let isPrepared=false
//     if(isPrepared==true){
//         resolve('I will attend mock')
//     }
//     else{
//         reject('I cant attend attend,, I will attend on some other day')
//     }
// })
// console.log(myPromise)

// ! consume promise

// // ? then(callback)-accepted
// myPromise.then((res)=>{console.log(res)})

// // ? catch(callback)-rejected
// .catch((err)=>{console.log(err)})

// // ? finally()-accepted/rejected
// .finally(()=>{console.log('All the best bro... DO well')})


// let fetchdata=new Promise((res,rej)=>{
//     let result=fetch('https://fakestoreapi.com/products')
//     res(result)
// })
// fetchdata.then((data)=>{console.log(data)})
// console.log('end')
