const right = document.querySelector('#right')
const left = document.querySelector('#left')
const slider = document.querySelector('.slider-slides')
const headName = document.querySelector('#name')
const descr = document.querySelector("#description")
let currentSlide = 0
const project = {
    name: 'ProjectName',
    description: 'descripton Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text Text Text Text TextText Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
    imgs: ['../projects-data/test-project/e56f45bba057a213e77ef36e3a826dd5.jpg', '../projects-data/test-project/8b25cdef6fdddb757e8e31e54f90e48b.jpg']
}
headName.textContent = project.name
descr.textContent = project.description
project.imgs.forEach(el=>{
    slider.insertAdjacentHTML('beforeend', `<img class="slide" src="${el}" width="100%" height="20%">`)
})

const slides = Array.from(document.querySelectorAll('.slide'))
function update(count){
    slides.forEach(el => {
        el.style.transform = `translateX(-${el.clientWidth * count}px)`
    })
}
right.addEventListener('click', ()=>{
    if(slides.length != currentSlide + 1){
        currentSlide += 1
        update(currentSlide)
    }
    else{
        currentSlide = 0
        update(currentSlide)
    }
})
left.addEventListener('click', ()=>{
    if(currentSlide != 0){
        currentSlide -= 1
        update(currentSlide)
    }
    else{
        currentSlide = slides.length - 1
        update(currentSlide)
    }
})