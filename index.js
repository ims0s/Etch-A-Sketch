const grid=document.getElementById("grid");
const colorPicker= document.getElementById('color')
let pixels;
let color = 'black'
let mouseDown = false;
document.body.addEventListener('mousedown',() => mouseDown=true);
document.body.addEventListener('mouseup',() => mouseDown=false);

function createGrid(side=16){
    grid.innerHTML=''; //here I'm emptying the grid
    grid.style.gridTemplateRows=`repeat(${side},1fr)`; // create columns
    grid.style.gridTemplateColumns=`repeat(${side},1fr)`;//create rows
    for(let i = 0;i<side*side;i++){
        const pixel=document.createElement('div') // create each pixel and give it a class and give it 
        pixel.classList.add('pixel')
        grid.appendChild(pixel)
        
    }
    pixels=document.querySelectorAll('div.pixel')
    pixels.forEach((pixel) => pixel.addEventListener('mouseover',changeColor));
    pixels.forEach((pixel) => pixel.addEventListener('mousedown',changeColor));

}

const changeColor=(e) =>{

    if(mouseDown){
        e.target.style.background=color;
    }
}

colorPicker.addEventListener('change',(e) => color = colorPicker.value)

createGrid();