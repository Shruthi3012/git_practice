function sliderval() {
    const myslider = document.getElementById("cm-my-slider");
const svalue = document.getElementById("cm-slider-value");
    svalue.textContent = myslider.value;
}
function slidersquareval(){
    const myslide = document.getElementById("cm-slider-square");
    const slidervalue = document.getElementById("cm-slider-square-value");
    slidervalue.textContent = myslide.value;
}
function sliderrectangleval(){
    const myslide = document.getElementById("cm-slider-rectangle");
    const slidervalue = document.getElementById("cm-slider-rectangle-value");
    slidervalue.textContent = myslide.value;
}