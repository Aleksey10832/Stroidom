document.querySelector('#logOut').addEventListener('click', ()=>{
    document.cookie = 'acces_token=null; path=/'
    localStorage.clear()
})