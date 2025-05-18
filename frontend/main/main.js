const slides = Array.from(document.querySelectorAll(".slide"))
const currentSlideInfo = document.querySelector("#slide-count-current")
var currentSlide = 0
const modal = document.querySelector('.modal')
const modalWindow = document.querySelector(".modal-window")
const projects = document.querySelector(".projects-data")
const projectsData = []

document.querySelector("#slide-count-max").textContent = String(slides.length).padStart(2, '0')
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
async function GetProjects() {
    const boba = await (await fetch(`http://localhost:3000/projects?random=1`)).json()
    boba.forEach(el => {
        projectsData.push({id: el.id, name: el.name, description: el.description, img: `http://localhost:3000/file/${el.images[0].fileName}`})
    })
    projectsData.forEach(el => {
        projects.insertAdjacentHTML("beforeend", `
            <img class="projects-img" id="${el.id}" src="${el.img}">
            `)
    })
    Array.from(document.querySelectorAll(".projects-img")).forEach(el => el.addEventListener("click", (target) => {
        ModalWindow(target)
    }))
}
GetProjects()

document.querySelector("#info").addEventListener("click", ()=>{
    const doc = window.open('', '_self', 'biba')
    doc.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="main.css">
            <link rel="stylesheet" href="../base.css">
            <title>Main</title>
        </head>
        <body>
            <h1 class="text-head-1">Aboba</h1>
        </body>`);
        console.log(doc)
        console.log(document)
    doc.document.close()
})

function updateSlide(currentSlide){
    slides.forEach(el =>{
        el.style.transform = `translateX(-${currentSlide * el.clientWidth}px)`
    })
    currentSlideInfo.textContent = String(currentSlide + 1).padStart(2, '0');
    
}

function displayBlock(arg){
    if(arg){
        document.querySelector("body").style.overflow = "hidden"
        Array.from(document.querySelectorAll('section')).forEach(el => {
            el.style.filter = "blur(3px)";
            el.style.pointerEvents = "none"
        })
    }
    else{
        document.querySelector("body").style.overflow = "scroll"
        Array.from(document.querySelectorAll('section')).forEach(el => {
            el.style.filter = "blur(0px)";
            el.style.pointerEvents = "auto"
        })
    }
}

function ModalWindow(target){
    displayBlock(true)
    modal.style.filter = "blur(0px)"
    modal.style.display = "block"
    modalWindow.style.display = "block"
    modalWindow.style.filter = "blur(0px)"
    modalWindow.classList.add("modal-window-active")
    modalWindow.style.pointerEvents = "auto"
    projectsData.forEach(el3 => {
        if(el3.id == target.target.id){
            modalWindow.innerHTML = `
        <h1 style="text-align: center; margin-bottom: 15px">${el3.name}</h1>
        <img src="${el3.img}" width="300px" style="margin-bottom: 10px">
        <div style="display flex"><p style="text-align: center; margin: 0 auto; max-width:300px;max-height: 100px;overflow: scroll">${el3.description}</p></div>
        <div style="display: flex; margin-top: 9px">
            <div style="display: flex;margin: 0 auto; gap: 20px;">
                <a href="project/?id=${el3.id}"><button style="">Заинтересованы проектом?</button></a>
                <button id="close-window">Нет</button>
            </div>
        <div>
        `
        }
    })
    document.querySelector("#close-window").addEventListener("click", ()=>{
        modalWindow.classList.remove("modal-window-active")
        modalWindow.classList.add("modal-window-deActive")
        setTimeout(()=>{modalWindow.style.display = "none";modalWindow.classList.remove("modal-window-deActive")}, 300)
        displayBlock()
    })
}