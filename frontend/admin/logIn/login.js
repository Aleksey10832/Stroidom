const error = document.querySelector('#error')
document.querySelector('#logIn').addEventListener('click', async ()=>{
    if(document.querySelector('#login').value && document.querySelector('#password').value){
        const login = await (await fetch('http://localhost:3000/auth', {
            method: 'POST', headers: {
            'Content-Type': 'application/json;charset=utf-8'}, 
            body: JSON.stringify({
                login: document.querySelector('#login').value, 
                password: document.querySelector('#password').value
            })
        })).json()
        if(login.statusCode == 401){
            error.innerHTML = 'Логин или пароль не верен'
        } else{
            error.innerHTML = 'Успешно';
            error.style.color = 'green';
            document.cookie = `acces_token=${login.acces_token}; path=/`
            window.open('../', '_self')
        }
    } else {
        error.innerHTML = 'Все поля должны быть заполнены!'
    }
})
checkToken()

async function checkToken() {
    try{
        const request = await fetch('http://localhost:3000/user/profile', {headers: {'Authorization': `Bearer ${findToken()}`}})
        if(request.status.toString()[0] != '4'){window.open('/admin/', "_self")}
    } catch{}
}
function findToken(){
    const cookies = document.cookie.split('; ').find(el => el.split('=')[0] == 'acces_token')
    return cookies.split('=')[1]
}