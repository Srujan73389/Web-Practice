// ! Rest Parameter(... identifier): Improved way to handle the function parameters and can store indefinite no of args as array

// function demo(a,b,c,...d){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// demo(3,4,4,5,7,4,2,3,5);

// ! Spread Operator(...iterable):spread values into object
// let nums=[1,2,3,4,5,6,7]

// function displ(x,y,z,...rest){
//     console.log(x)
//     console.log(y)
//     console.log(z)
//     console.log(rest)
// }
// displ(...nums)

// let even=[2,4,6,8,10,12,14]
// let odd=[1,3,5,7,9,11,13,15]
// let merg=[...even,...odd]
// console.log(merg)


// let per={
//     ename:'kanaka',
//     id:101,
//     sal:'cnt',
//     addr:'kar'
// }

// let details={...per}
// console.log(details)

// ! Deconstructing

// let colours=['white','black','yellow','blue','gold','silver','green']
// console.log(colours)
// ! Destructure --white,blue,green
// let[a1, , ,a2, , ,a3]=colours
// console.log(a1,a2,a3)


// ! Destructure entire array
// let [a,b,c,d,e,f,g]=colours
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g) 

// ! Object Destructing:extract values from large object and assign them to variable 

let user={
    unsme:'SRUJAN KANAKA',
    userid:101,
    skills:['html','css','python','ai'],
    salary:40000,
    address:{
        street:'BTM',
        city:'BNG',
        pin:577547,
        phone:9353554832
    },
    is_Dev:true
}

let {salary,unsme,userid,is_Dev,skills:[a1,a2,a3,a4],address:{street,city,pin,phone}}=user
console.log(unsme)
console.log(userid)
// console.log(skills)
console.log(salary)
// console.log(address)
console.log(a1,a2,a3,a4)
console.log(street,city,pin,phone)

let {street:street1,city:city1,pin:pin1,phone:phone1}=user.address
console.log(street1,city1,pin1,phone1)