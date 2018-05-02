export function getAuth () {
    let auth = localStorage.getItem('auth')
    return auth
}

export async function setAuth (data) {
    await localStorage.setItem('auth', data.token)    
    await localStorage.setItem('user_type', data.type)
         
}