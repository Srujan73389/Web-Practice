// // let arr=[11,2,'SRUJAN']
// // console.log(arr)

// // arr[1]=22;
// // console.log(arr)
// // arr[3]=90;
// // arr[4]='KANAKA';
// // console.log(arr)
// // delete arr[3];
// // console.log(arr)
// // console.log(arr)


// // let user=new Array(2)
// // user[0]=123;
// // user[1]='kanaka';
// // user[2]=3.2;
// // user[3]='Hai';
// // console.log(user)

// let menu=['idli','sambar','dosa','chatni','puliyogare','dosa']
// console.log(menu)

// menu.push('puliyogare','palav','chole','pavbhaji')
// console.log(menu)
// menu.unshift('curdrice','paneer','chicken')
// console.log(menu)
// menu.pop()
// console.log(menu)
// menu.shift()
// console.log(menu)
// menu.splice

// // ['paneer', 'chicken', 'idli', 'sambar', 'dosa', 'chatni', 'puliyogare', 'dosa', 'puliyogare', 'palav', 'chole']

// menu.splice(2,3,'MAsala Puri','Olige')
// console.log(menu)
// menu.splice(1,3)
// console.log(menu)
// // (7) ['paneer', 'chatni', 'puliyogare', 'dosa', 'puliyogare', 'palav', 'chole']

// menu.splice(3,0,'Anna Sambar','Eggrice','Kabab')
// console.log(menu)
// let nam=menu.slice(4)
// console.log(nam)

// let db=menu.indexOf('Olige')
// console.log(menu)
// console.log(menu.indexOf('Kabab'))
// console.log(menu.at(5))
// console.log(menu.includes("kabab"))

// // Join
// console.log(menu.join())
// console.log(menu.join('-'))
// console.log(menu.join('😓'))

// // toString

// console.log(menu.toString())
// console.log(menu.toString('-'))
// console.log(menu.toString('😓'))

// // Concat
// console.log(menu)

// let ad=['tea','coffee','bread']
// console.log(menu.concat(ad))
// console.log(menu)
// console.log(menu.reverse())

// console.log(menu)

// let nums=[1,2,3,4,5,6,7,8,9,10]
// console.log(nums)

// let even =nums.filter((ele,ind)=>{
//     if(ele%2==0){
//         return ele;
//     }
// })
// console.log(even)


// let mul=nums.map((ele,ind)=>{
//     return ele*100;
// }

// )
// console.log(mul)


// let total=nums.reduce((ele,ind)=>{
//     return ele+ind;
// },0
// )
// console.log(total)


// Nested Array

let arr=[1,2,3,[10,20,30],4,6,[100,300,[5000,7000]],9]
console.log(arr[3][1])
console.log([arr[6][2][1]])