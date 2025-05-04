const right = document.querySelector('#right')
const left = document.querySelector('#left')
const slider = document.querySelector('.slider-slides')
const headName = document.querySelector('#name')
const descr = document.querySelector("#description")
const url = new URL(window.location.href)
const projectId = url.searchParams.get('id')
let currentSlide = 0
async function getProj(id){
    const project = await (await fetch(`http://192.168.0.14:3000/projects?id=${id}`)).json()
    project.images = project.images.map(el => `http://192.168.0.14:3000/file/${el.fileName}`)
    headName.textContent = project.name
    descr.textContent = project.description
    project.images.forEach(el=>{
        slider.insertAdjacentHTML('beforeend', `<img class="slide" src="${el}"height="20%">`)
    })
    const slides = Array.from(document.querySelectorAll('.slide'))
    right.addEventListener('click', ()=>{
        if(slides.length != currentSlide + 1){
            currentSlide += 1
            update(currentSlide, slides)
        }
        else{
            currentSlide = 0
            update(currentSlide, slides)
        }
    })
    left.addEventListener('click', ()=>{
        if(currentSlide != 0){
            currentSlide -= 1
            update(currentSlide, slides)
        }
        else{
            currentSlide = slides.length - 1
            update(currentSlide, slides)
        }
    })
}



function update(count, slides){
    slides.forEach(el => {
        el.style.transform = `translateX(-${el.clientWidth * count}px)`
    })
}
getProj(projectId)