let incr=document.getElementById('incr')
let decr=document.getElementById('decr')
let reset=document.getElementById('reset')
let cnt_blk=document.getElementById('cnt_blk')

let count=0
incr.addEventListener('click',()=>{
    count++;
    cnt_blk.textContent=`COUNT : ${count}`
})
decr.addEventListener('click',()=>{
    count--;
    cnt_blk.innerHTML=`COUNT : ${count}`
})
reset.addEventListener('click',()=>{
    count=0;
    cnt_blk.textContent=`COUNT : ${count}`
})