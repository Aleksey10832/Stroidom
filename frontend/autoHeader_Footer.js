document.querySelector("footer").innerHTML = `<img src="../logo.png" class="logo" alt="">
        <ul class="nav-menu-footer">
            <li class="header"><a href="../main/main.html" >Главная</a></li>
            <li><a class="nav-menu-footer-object" href="">Галлерея</a></li>
            <li><a class="nav-menu-footer-object" href="">Проекты</a></li>
            <li><a class="nav-menu-footer-object" href="">Сертификация</a></li>
            <li><a class="nav-menu-footer-object" href="">Контакты</a></li>
        </ul>
        <ul class="nav-menu-footer">
            <li class="header">Контакты</li>
            <li style="line-height: 1;"><img class="nav-menu-footer-img" src="../imgs/locate.png" alt="">1234 Sample Street <p style="line-height: 2.7;">Austin Texas 78704</p></li>
            <li><img class="nav-menu-footer-img" src="../imgs/phone.png" alt="">512.333.2222</li>
            <li><img class="nav-menu-footer-img" src="../imgs/email.png" alt="">sampleemail@gmail.com</li>
        </ul>
        <ul class="nav-menu-footer">
            <li class="header">Связаться с нами</li>
            <li class="logs"><ul>
                <li><img src="../imgs/facebook.png" alt=""></li>
                <li><img src="../imgs/twitter.png" alt=""></li>
                <li><img src="../imgs/Linked In.png" alt=""></li>
                <li><img src="../imgs/pininterest.png" alt=""></li>
            </ul></li>
        </ul>
        <p class="nav-menu-footer-bottom">© 2025 Все права защищены</p>`
document.querySelector('header').innerHTML = `
        <img src="../logo.png" class="logo" height="102px">
        <div class="nav-menu">
            <a class="nav-menu-object" href="../">ГЛАВНАЯ</a>
            <a class="nav-menu-object" href="../projects/">ПРОЕКТЫ</a>
            <a class="nav-menu-object" href="">КОНТАКТЫ</a>
        </div>
        <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
        <label class="burger" for="burger-checkbox"></label>`
document.querySelector(".burger").addEventListener('click', ()=>{
    const navMenu = document.querySelector(".nav-menu")
    if(!document.querySelector(".burger-checkbox").checked){
        navMenu.classList.remove('nav-menu-deActive')
        navMenu.style.display = 'block'
        navMenu.classList.add('nav-menu-active')
    }
    else{
        navMenu.classList.remove('nav-menu-active')
        setTimeout(()=>{ 
            navMenu.style.display = 'none';
        }, 300)
        navMenu.classList.add('nav-menu-deActive')
    }
})