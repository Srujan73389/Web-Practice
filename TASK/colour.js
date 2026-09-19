function gencode(){
    const str='0123456789abcdef'
    let color='#'
    for (let i=1;i<=6;i++){
        let randindex=Math.floor(Math.random()*str.length)
        color+=str[randindex]

    }
    return color;

}
let colorBlk=document.getElementById('colourcode')
let changecolour=document.getElementById('changebtn')

changecolour.addEventListener('click',()=>{
    document.body.style.backgroundColor=gencode()
    colorBlk.innerText=gencode()
})