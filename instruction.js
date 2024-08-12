// config.js

// Сделано:
// utils/config.js

import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/',
})


// service
 //product.service.js

 // Сделано:
// productService.js

 import config.js from '...'

 export const productService = {
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
  //category.service.js

  // Сделано:
  // categoryServise.js

  import config.js from '...'

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




 // Products.jsx 

// Сделан импорт:

 import product.service.js from 'service'

 export const Product = () => {

  return <div></div>
 }




//  slice

// Сделано:
//productsSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import { shuffle } from "../../utils/common";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const data = await productService.findAll()
      return data;
    } catch (err) {
      console.log("error!!!", err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered: [],
    related: [],
    isLoading: false,
  },
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload)
    },
    getRelatedProducts: (state, { payload }) => {
      const list = state.list.filter(({ category: {id} }) => id === payload)
      state.related = shuffle(list)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions

export default productsSlice.reducer;
