const slides = Array.from(document.querySelectorAll(".slide"))
const currentSlideInfo = document.querySelector("#slide-count-current")
var currentSlide = 0
const modalWindow = document.querySelector(".modal-window")
const projects = document.querySelector(".projects-data")
const projectsData = [{
        name: "Project 1",
        description: "Описание проекта ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ........... ...........",
        img: "../projects-data/test-project/8b25cdef6fdddb757e8e31e54f90e48b.jpg"
    }, 
    {
        name: "Project 2",
        description: "Описание проекта ...........",
        img: "../projects-data/test-project/e56f45bba057a213e77ef36e3a826dd5.jpg"
    },
    {
        name: "Project 3",
        description: "Описание проекта ...........",
        img: "../projects-data/test-project/edenRock-aloeRidge_47 copy.jpg"
    },
    {
        name: "Project 4",
        description: "Описание проекта ...........",
        img: "../projects-data/test-project/LakeHouse_Ext_106_HR_Pool_002_sa_HR.jpg"
    },
]
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

projectsData.forEach(el => {
    projects.insertAdjacentHTML("beforeend", `
        <img class="projects-img" id="${el.name}" src="${el.img}">
        `)
})
Array.from(document.querySelectorAll(".projects-img")).forEach(el => el.addEventListener("click", (target) => {
    ModalWindow(target)
}))


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
    modalWindow.style.display = "block"
    modalWindow.style.filter = "blur(0px)"
    modalWindow.classList.add("modal-window-active")
    modalWindow.style.pointerEvents = "auto"
    projectsData.forEach(el3 => {
        if(el3.name == target.target.id){
            modalWindow.innerHTML = `
        <h1 style="text-align: center; margin-bottom: 15px">${el3.name}</h1>
        <img src="${el3.img}" width="300px" style="margin-bottom: 10px">
        <div style="display flex"><p style="text-align: center; margin: 0 auto; max-width:300px;max-height: 100px;overflow: scroll">${el3.description}</p></div>
        <div style="display: flex; margin-top: 9px">
            <div style="display: flex;margin: 0 auto; gap: 20px;">
                <a href="main.html"><button style="">Заинтересованы проектом?</button></a>
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