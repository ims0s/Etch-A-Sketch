let pixels=document.querySelectorAll('div.pixel')
console.log(pixels)

console.log()

const grid=document.getElementById("grid")
// document.getElementById('grid').style.width='1000px'
// jgrid.style.width='200px'
// // console.log(hight)
let mousedown=false
document.body.addEventListener('mousedown',() => mousedown=true)
document.body.addEventListener('mouseup',() => mousedown=false)

function addPixels(side){
    grid.innerHTML=''
    for(let i =0 ; i<side*side; i++){
        const pixel=document.createElement('div')
        pixel.classList.add('pixel')
        pixel.style.width=`${700/side}px`
        pixel.style.height=`${700/side}px`
        grid.appendChild(pixel)
        console.log(i)
    }        
    pixels=document.querySelectorAll('div.pixel')
    pixels.forEach(pixel => pixel.addEventListener('mouseover',(e)=>{
        if(mousedown){
            console.log(e.target.style.backgroundColor="black")
            e.target.style.backgroundColor="black"
        }
    }))
    pixels.forEach(pixel => pixel.addEventListener('mousedown',(e)=>{
        
            console.log(e.target.style.backgroundColor="black")
            e.target.style.backgroundColor="black"
        
    }))
    
}

pixels.forEach(pixel => pixel.addEventListener('mouseover',(e)=>{
    if(mousedown){
        console.log(e.target.style.backgroundColor="black")
        e.target.style.backgroundColor="black"
    }
}))
pixels.forEach(pixel => pixel.addEventListener('mousedown',(e)=>{
    
        console.log(e.target.style.backgroundColor="black")
        e.target.style.backgroundColor="black"
    
}))