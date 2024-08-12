import { createSlice } from "@reduxjs/toolkit";

const initial = {
    products: []
}

const productSlice = createSlice({
    name: 'products',
    initialState: initial,
    reducers: {
        getProducts: (state, action) => {

            state.products = action.payload

            // state.products.push(
            // let i
            //     for (i >= 0; i<action.payload.length; i++) {
            //         state.products.push(
            //             action.payload[i].title,
                        // {
                        //     title: action.payload[i].title,
                        //     description: action.payload[i].description,
                        //     price: action.payload[1].price
                        // }
                //     )
                // }
            },
        //         {
   
        //             title: action.payload.title,
        //             description: action.payload.description,
        //             price: action.payload.price
        //         }
        //     )
        // },
        addProduct: (state) => {}
    }
})

export const { addProduct, getProducts } = productSlice.actions

export default productSlice.reducer
