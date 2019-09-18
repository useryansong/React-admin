/**
 * Function module that can send asynchronous ajax requests
 * 
 * return: promise
 */
import axios from 'axios'

 export default function ajax(url, data={},type='GET') {
    if (type==='GET') {
        //send get request
        return axios.get(url, {//config object
            params: data
        })
    }else {//send post}
        return axios.post(url, data)
 }
}


// //request login API
// ajax('/login', {username:'Tom',password:'12345'}, 'POST').then()