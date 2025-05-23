const nextPage = document.querySelector("#next-page")
const prewPage = document.querySelector("#prew-page")
const currentCountHTML = document.querySelector("#current-page");
let currentCount = 0;
let maxPage = document.querySelector("#max-page");

const projects = document.querySelector("#projects")
async function Update(currentcount){    
    maxPage.textContent =  Math.ceil(((await (await fetch(`http://localhost:3000/projects`)).json()).count) / 3).toString().padStart(2, '0')
    const respons = await (await fetch(`http://localhost:3000/projects?page=${currentCount + 1}`)).json()
    let stroka = ""
    respons.forEach(element => {
        if(element){
            stroka +=`<li class="project"> 
                    <img class="project-img" src="http://localhost:3000/file/${element.images[0].fileName}" alt="404">
                    <h1 class="text-head-1">${element.name}</h1>
                    <p>${element.description}</p>
                    <button id='${element.id}'>Узнать больше <img src="imgs/arrow-right.png"></button>
                </li>`
            }
    });
    window.scrollTo(0, 0);
    projects.innerHTML = stroka
    Array.from(document.querySelectorAll(`.project button`)).forEach(el =>{el.addEventListener('click', (tar)=>{
        console.log(tar.target.id);
        window.open(`../project/?id=${tar.target.id}`, '_self')
    })})
    
    
}
Update(currentCount)
currentCountHTML.textContent = Math.floor(currentCount + 1).toString().padStart(2, '0')
nextPage.addEventListener('click', ()=>{
    if(maxPage.textContent != currentCountHTML.textContent){
        currentCount += 1
        Update(currentCount)
        currentCountHTML.textContent = Math.floor(currentCount + 1).toString().padStart(2, '0')
    }
})
prewPage.addEventListener('click', ()=>{
    if(currentCount > 0){
        currentCount -= 1
        Update(currentCount)
        currentCountHTML.textContent = Math.floor(currentCount + 1).toString().padStart(2, '0')
    }
})
    