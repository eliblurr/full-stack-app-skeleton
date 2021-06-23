import axios from 'axios'
import {environment} from '../environment/env.prod'

let access_control = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem('accessToken')
        // + localStorage.getItem('accessToken')
    }
}

export const login = async(user) => {
    return axios.post(environment.API_URL_BASE+'/api/user/authenticate', {
          "email": user.email,
          "password": user.password
      })
      .then(res => {
          console.log(res)
          return res
    }).catch(err => console.log(err))
  }

//   /current_user
export const authenticateToken = async() => {
    return axios.get(environment.API_URL_BASE+'/api/user/current_user', access_control)
    .then( res => {
        console.log(res)
        return res
    }).catch(err => console.log(err))
}
  
  
  