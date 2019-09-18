/**
 * including all request function modules
 * all return is promoise
 */

import ajax from './ajax'

//login
//  export function reqLogin(username,password) {
//     return ajax('./login', {username,password}, 'POST')
//  }
// const BASE = ''

export const reqLogin = (username, password) => ajax('/login', {username,password}, 'POST')

//add user
export const reqAddUser = (user) => ajax('/manage/user/add',user, 'POST')