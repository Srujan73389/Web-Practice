// ! forEach(callback):

// let stds=['srujan','kanaka','darhsu'];
// stds.forEach((strs,ind)=>{
//     console.log(`Hello dear ${strs}`);
// })
// let dep=stds.map((strd,ind)=>{
//     return `Hello ${strd}`;
// })
// console.log(dep)
// // for of
// let nums=[1,2,3,4,5,6,7]
// for(let num of nums){
//     console.log(num)
// }

// ! for in: keys

// let emp={
//     ename:'sruj',
//     eid:101,
//     class:10
// }
// for(let k in emp){
//     console.log(emp[k])
// }

// !  Date Objects

let d=new Date()
// console.log(d)
// console.log(d.getDate())
// console.log(d.getFullYear())
// console.log(d.getDay())
// console.log(d.getTime())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.toLocaleTimeString())
// console.log(d.toLocaleDateString())

// ! TO SET DOB
// d.setFullYear(2005)
// d.setMonth(2)
// d.setDate(22)
// console.log(d)

// ! Math Objects
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(9))
// console.log(Math.cbrt(8))
// console.log(Math.round(1.5))
// console.log(Math.round(-1.5))
// console.log(Math.ceil(-4.5))
// console.log(Math.floor(-6.45))
// console.log(Math.trunc(-69.45))
// console.log(Math.max(2,-2,9,-39))
// console.log(Math.min(2,-2,9,-39))
// console.log(Math.random())



// ! Captcha Generation

// function generate(){
//     let str='1234567'
//     let c=""
// for (let i=0;i<4;i++){
//     c+=str[Math.floor(Math.random()*str.length)]

// }
// alert(`The Otp is ${c}`)

// }
// generate()


// String Methods
let str='Hello Good Morning'
console.log(str)
console.log(str.length)
// ! slice:extract
console.log(str.slice(0,3))
console.log(str.slice(8))
console.log(str.slice(-2))
// ! substring: wont work for negative
console.log(str.substring(0,3))
console.log(str.substring(8))
console.log(str.substring(-2))

// ! substr : Extraxt part of string
console.log(str.substr(1,10))
// ! replace:
console.log(str.replace('Hello','night'))
// ! replace-all
console.log(str.replaceAll('n','🙄'))
// ! trim():remove start and end spaces
let text="    hai  h  ello "
console.log(text)
console.log(text.trim())
// ! indexof: returns index pos
let hai='Hello Good Afternoon'
console.log(hai.indexOf('Good'))
console.log(hai.indexOf('G'))

// ! lastindexOf
console.log(hai.lastIndexOf('o'))

// ! includes
console.log(hai.includes('Good'))
console.log(str.includes('Morning'))

// ! repeat
console.log(hai.repeat(5))
// ! charAt
console.log(hai.charAt(9))
// ! charCodeAt(index): returns ascii value
console.log(hai.charCodeAt(6))

let str1='Srujan'
let str2='Kanaka'
console.log(str1.toUpperCase())
console.log(str2.toLowerCase())
console.log(str1.concat(str2))

// ! Hideing

let n='58'
console.log(n.padStart(10,'X'))
console.log(n.padEnd(10,'X'))










