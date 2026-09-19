// ! click
// let btn=document.querySelector('button')
// console.log(btn)
// let inputfield=document.getElementById('colorname')
// console.log(inputfield)


// btn.addEventListener('click',()=>{
//     if(inputfield.value==""){
//         alert('Enter colourname')
//     }
//     else{
//         console.log(inputfield.value)
//         document.body.style.backgroundColor=inputfield.value
//         inputfield.value="";
//     }
// })

// ! Mouseover

// let btn=document.querySelector('button')
// console.log(btn)
// btn.addEventListener('mouseover',()=>{
//     document.body.style.backgroundColor="black";
//     btn.innerText='HOVER FOR DARK THEME'
// })

// let btn=document.querySelector('button')
// console.log(btn)
// btn.addEventListener('mouseout',()=>{
//     document.body.style.backgroundColor="black";
//     btn.innerText='HOVER FOR DARK THEME'
// })

// let heart=document.getElementById('heart')
// console.log(heart)
// ! mousedown
// heart.addEventListener('mousedown',()=>{
//     heart.innerHTML="😑";
// })
// ! mouseup
// heart.addEventListener('mouseup',()=>{
//     heart.innerHTML="😁"
// })

// ! contextmenu
// let qsp=document.getElementById('qsp')
// console.log(qsp)
// qsp.addEventListener('contextmenu',(e)=>{
//     e.preventDefault()
//     console.log(e)

//     qsp.innerText+='IS MY GOD MY FATHER'
// })

// let f=document.forms[0]
// console.log(f)
// f.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(e)
//     document.body.style.backgroundColor='green'
// })

// let btn=document.querySelector('button')
// console.log(btn)
//  btn.addEventListener('dblclick',()=>{
//     alert('YOu clciked a button')
//     document.body.style.backgroundColor='pink'
//  })


// addEventListener('keypress',(e)=>{
//     console.log(`Key Pressed ` + e.key)
   
// })
// addEventListener('keydown',(e)=>{
//     console.log(`Key Down ` + e.key)
   
// })
// addEventListener('keyup',(e)=>{
//     console.log(`Key Up ` + e.key)
   
// })


// ! Event Propagation

let child=document.getElementById('c')
let parent=document.getElementById('p')
let grandparent=document.getElementById('gp')

child.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('child checked')
    child.style.backgroundColor='red';

},true)
parent.addEventListener('click',(e)=>{
        e.stopPropagation()

    console.log('parent checked')
    parent.style.backgroundColor='yellow';

},true)
grandparent.addEventListener('click',(e)=>{
        e.stopPropagation()

    console.log('grandparent checked')
    grandparent.style.backgroundColor='blue';

},true)
