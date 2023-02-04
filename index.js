const pixels=document.querySelectorAll('div.pixel')
console.log(pixels)
pixels.forEach(pixel => pixel.addEventListener('click',(e)=>{
    console.log(e.target.style.backgroundColor="black")
    e.target.style.backgroundColor="black"
}))
console.log()
