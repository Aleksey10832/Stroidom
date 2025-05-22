async function checkToken() {
    try{
        const request = await fetch('http://localhost:3000/user/profile', {headers: {'Authorization': `Bearer ${findToken()}`}})
        if(request.status === 401){window.open('http://127.0.0.1:5500/admin/login/', "_self")}
    } catch{
        window.open('http://127.0.0.1:5500/admin/login/', "_self")
    }
}
checkToken()
function findToken(){
    const cookies = document.cookie.split('; ').find(el => el.split('=')[0] == 'acces_token')
    if(cookies){
        return cookies.split('=')[1]
    } else{
        return document.cookie
    }
    
}
