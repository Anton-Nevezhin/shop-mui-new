import api from '../utils/config.js'

const productService = {
 endpoint: 'product',
 async findAll (){
   try {
     const {data} = api.get(this.endpoint)
     return data
   } catch (err) { // либо обрабатывается здесь, либо передается вверх
     console.log(err)
     throw err
   }
 }
}

export default productService