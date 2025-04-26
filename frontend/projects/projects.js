const nextPage = document.querySelector("#next-page")
const prewPage = document.querySelector("#prew-page")
const currentCountHTML = document.querySelector("#current-page");
let currentCount = 0;
let maxPage = document.querySelector("#max-page");
const projects = document.querySelector("#projects")
const products = [
    {
        name: "product1",
        description: "description ...... ..... ....",
        img: "../projects-data/test-project/8b25cdef6fdddb757e8e31e54f90e48b.jpg"
    },
    {
        name: "product2",
        description: "description ...... ..... ....",
        img: "../projects-data/test-project/e56f45bba057a213e77ef36e3a826dd5.jpg"
    },
    {
        name: "product3",
        description: "description ...... ..... ....",
        img: "../projects-data/test-project/edenRock-aloeRidge_47 copy.jpg"
    },
    {
        name: "product4",
        description: "description ...... ..... ....",
        img: "../projects-data/test-project/LakeHouse_Ext_106_HR_Pool_002_sa_HR.jpg"
    },
    {
        name: "product4",
        description: "description ...... ..... ....",
        img: "../projects-data/test-project/LakeHouse_Ext_106_HR_Pool_002_sa_HR.jpg"
    },
    {
        name: "product4",
        description: "description ...... ..... ....",
        img: "../projects-data/test-project/LakeHouse_Ext_106_HR_Pool_002_sa_HR.jpg"
    },
    {
        name: "product4",
        description: "description ...... ..... ....",
        img: "../projects-data/test-project/LakeHouse_Ext_106_HR_Pool_002_sa_HR.jpg"
    }
];
maxPage.textContent = Math.floor(products.length / 3 + 1).toString().padStart(2, '0');
function Update(currentcount){
    let stroka = ""
    for(let i = currentcount * 3;i < (currentcount * 3 + 3);i++){
        if(products[i]){
            stroka +=`<li class="project"> 
                    <img width="85%" height="280px" src="${products[i].img}" alt="">
                    <h1 class="text-head-1">${products[i].name}</h1>
                    <p>${products[i].description}</p>
                    <button>Узнать больше <img src="imgs/arrow-right.png"></button>
                </li>`
        }
    }
    projects.innerHTML = stroka
}
Update(currentCount)
currentCountHTML.textContent = Math.floor(currentCount + 1).toString().padStart(2, '0')
nextPage.addEventListener('click', ()=>{
    if(currentCount <= products.length % 3){
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
    