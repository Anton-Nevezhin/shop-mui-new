import api from '../utils/config.js'

export const categoryService = {
  endpoint: 'categories',
  async findAll (){
    try {
      const {data} = api.get(`${this.endpoint}`)
      return data
    } catch (err) {
      throw err
    }
  },
  async findOne (id){
    try {
      const {data} = api.get(`${this.endpoint}/${id}`)
      return data
    } catch (err) {
      throw err
    }
  }
 }