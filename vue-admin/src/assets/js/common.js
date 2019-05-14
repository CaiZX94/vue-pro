export function authValid () {
  let logininfo = sessionStorage.getItem('logininfo') ? JSON.parse(sessionStorage.getItem('logininfo')) : {}
  let auth = logininfo.auth === 'superAdmin' ? 'superAdmin' : logininfo.auth === 'admin' ? 'admin' : 'user'
  return auth
}