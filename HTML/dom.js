// let head=document.getElementById('demo')
// console.log(head)

// ! innerHtml:change inner html of element
// head.innerHTML="<i>Good Evening<i>"

// ! innerText:change the content of element
// head.innerText='<i>Good Morning<i>'

// ! style:
// head.style.color="red";
// document.body.style.backgroundColor="lightblue"

// ! changing the value of existing attribut
// head.id='greet'

// ! setAttribute:
// head.setAttribute('class',"data")

// ! create element

// let div=document.createElement('div')
// div.textContent=('Hai Hello')
// console.log(div)
// ! append()
// document.body.appendChild(div)

// ! remove()
// document.body.removeChild(div)


// ! Event Listener

 let heading=document.getElementById('demo')
 heading.addEventListener('dblclick',()=>{
    heading.innerText='Happy Morinig';
 })