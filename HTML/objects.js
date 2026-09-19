// // Objects

// //  1.Object Literal

// let obg={
//     name:'sruj',
//     age:21,
//     address:'Gdl'
// }
// console.log(obg)

// console.log(obg.name)
// console.log(obg['age'])

// obg['age']=31
// obg.age=41
// console.log(obg)

// obg['contact']=959127931
// obg.uta='Aytu'
// console.log(obg)

// delete obg.uta;

// console.log(obg)

// 2. Object Constructor

// let car=new Object()
// console.log(car)
// car.name='SRUJAN KANAKA'
// car['age']=22
// console.log(car)

// 3.Constructor Function

// function stud(sid,sname,address){
//     this.sid=sid;
//     this.sname=sname;
//     this.address=address;
// }
// let std1=new stud(101,'KANAKA','GDL')
// console.log(std1)
// let std2=new stud(102,'SRUJAN','GDL')
// console.log(std2)

// std1.sid=103;
// console.log(std1)


// let user={
//     username:'SRUJAN',
//     userid:101,
//     age:21
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(Object.hasOwn(user,'username'))

// let work={
//     city:'Bng',
//     veh:'Bike',
//     food:'palav'
// }
// let high=console.log(Object.assign({},user,work))
// console.log(high)
// // console.log(high)
// console.log(Object.seal(user))
// console.log(Object.isSealed(user))
// user.age=31
// console.log(user)
// console.log(Object.freeze(user))
// console.log(Object.isFrozen(user))

// user.age=41
// console.log(user)


// let det={
//     ename:'kanaka',
//     eid:123,
//     salary:1223.43,
//     skills:['html','css','js'],
//     address:{
//         state:'kar',
//         city:'bng',
//         pincode:2343
//     },
//     greet: function(){
//         console.log(`Hello user ${this.ename}`);
//     }

// }
// console.log(det);
// console.log(det.ename);
// console.log(det.eid);
// console.log(det.salary);
// console.log(det.address);
// console.log(det['address']['state']);
// det.greet()

//  call(),apply(),bind()
 let fullname=function(add,sal){
        console.log(`Hello ${this.fname} ${this.lname} and address is ${add} and sal is ${sal}`);
    }
let emp1={
    fname:'Srujan',
    lname:'kanaka',
   
}

let emp2={
    fname:'HAI',
    lname:'HELLO',
   
}


let emp3={
    fname:'NAMASKARA',
    lname:'HELLO',
   
}
// call()

fullname.call(emp2,'MGL',3000)
fullname.call(emp3,'TML',9000)
// apply 

fullname.apply(emp1,['dvg',40000])
// Bind :returns new function

let res1=fullname.bind(emp3,'Karn',20000)
res1()