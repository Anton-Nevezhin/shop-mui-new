import { createSlice } from "@reduxjs/toolkit"

const initial = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initial,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push({
                // action.payload
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                images: action.payload.images,
                price: action.payload.price
            }
            )
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer