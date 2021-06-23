import axios from 'axios'
import {environment} from '../environment/env.prod'


// environment.API_URL_BASE
// let access_control = {
//     headers: {
//         Authorization: "Bearer " + localStorage.access_token
//     }
// }
const apiUrl = 'http://0.0.0.0:8000/api/'


export const addItem = async(item) => {
    return axios.post(environment.API_URL_BASE+'/api/item/create',{
        "title": item.title,
        "description": item.description
    }).then(res => {
        console.log(res)
        return res
    }).catch(err => console.log(err))
}

export const getItem = async(item) => {
    return axios.get(environment.API_URL_BASE+'/api/item', {
        params: item ? item: null})
      .then(res => {
          console.log(res)
          return res
    }).catch(err => console.log(err))
}

export const deleteItem = async(id) => {
    return axios.delete(environment.API_URL_BASE+'/api/item/delete/'+id)
      .then(res => {
          console.log(res)
          return res
    }).catch(err => console.log(err))
}

export const updateItem = async(item) => {
    return axios.put(environment.API_URL_BASE+'/api/item/update/'+item.id,{
        "title": item.title.length > 1 ? item.title : null,
        "description": item.description.length > 1 ? item.description : null          
    })
      .then(res => {
          console.log(res)
          return res
    }).catch(err => console.log(err))
}
// {
//     "search": item ? item.search : null,
//     "value": item ? item.value : null,
    // "limit": 100,
    // "skip": item ? item.skip : null
// }
  