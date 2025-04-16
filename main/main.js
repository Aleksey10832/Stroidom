const slides = Array.from(document.querySelectorAll(".slide"))
const currentSlideInfo = document.querySelector("#slide-count-current")
var currentSlide = 0
document.querySelector("#slide-count-max").textContent = String(slides.length).padStart(2, '0')
function updateSlide(currentSlide){
    slides.forEach(el =>{
        el.style.transform = `translateX(-${currentSlide * el.clientWidth}px)`
    })
    currentSlideInfo.textContent = String(currentSlide + 1).padStart(2, '0');
}

document.querySelector("#right").addEventListener("click", ()=>{
    if(currentSlide < slides.length - 1){
        currentSlide += 1
    }
    else{
        currentSlide = 0
    }
    updateSlide(currentSlide)
})

document.querySelector("#left").addEventListener("click", ()=>{
    if(currentSlide >= 1){
        currentSlide -= 1
    }
    else{
        currentSlide = slides.length-1
    }
    updateSlide(currentSlide)
})