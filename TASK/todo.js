let addBtn=document.querySelector('button')
let inputfield=document.getElementById('task')
let ul=document.getElementById('task_list')

addBtn.style.color='blue';
addBtn.style.backgroundColor='pink'
inputfield.style.color='green'
ul.style.color='pink'

addBtn.addEventListener('click',()=>{
    if(inputfield.value==""){
        alert('Enter a value')
    }
    else{
        let listItem=document.createElement('li')
        listItem.innerText=inputfield.value
        ul.appendChild(listItem)
        inputfield.value=""
        listItem.addEventListener('dblclick',()=>{
            listItem.remove()
        })
    }
})