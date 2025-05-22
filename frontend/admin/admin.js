document.querySelector('#logOut').addEventListener('click', ()=>{
    document.cookie = 'acces_token=null; path=/'
    localStorage.clear()
})
async function getInfo() {
    const profile = await (await fetch('http://localhost:3000/user/profile', {headers: {'Authorization': `Bearer ${findToken()}`}})).json()
    console.log(profile)
}
getInfo()


function findToken(){
    const cookies = document.cookie.split('; ').find(el => el.split('=')[0] == 'acces_token')
    if(cookies){
        return cookies.split('=')[1]
    } else{
        return document.cookie
    }
    
}
