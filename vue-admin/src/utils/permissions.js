// 根据登录信息返回权限控制的数据
export function validPerm () {
  let role = JSON.parse(localStorage.getItem('logininfo')).auth
  if (role === 'superAdmin') {
    return {superAdmin: true, admin: true}
  } else if (role === 'admin') {
    return {superAdmin: false, admin: true}
  } else {
    return {superAdmin: false, admin: false}
  }
}
