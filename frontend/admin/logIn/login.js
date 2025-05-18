document.querySelector('#logIn').addEventListener('click', async ()=>{
    const login = await (await fetch('http://localhost:3000/auth', {
        method: 'POST', headers: {
        'Content-Type': 'application/json;charset=utf-8'}, 
        body: JSON.stringify({
            login: document.querySelector('#login').value, 
            password: document.querySelector('#password').value
        })
    })).json()
    if(login.statusCode == 401){console.log('Неверные данные')}else{
        document.cookie = `acces_token=${login.acces_token}; path=/`
        window.open('../')
    }
})
checkToken()

async function checkToken() {
    try{
        const request = await fetch('http://localhost:3000/user/biba', {headers: {'Authorization': `Bearer ${findToken()}`}})
        console.log(document.cookie)
        if(request.status.toString()[0] != '4'){window.open('/admin/', "_self")}
    } catch{}
}
function findToken(){
    const cookies = document.cookie.split('; ').find(el => el.split('=')[0] == 'acces_token')
    return cookies.split('=')[1]
}