import { createSlice } from "@reduxjs/toolkit"

const initial = {
    categories: []
}

const categoriesSlice = createSlice ({
    name: 'categories',
    initialState: initial,
    reducers: {
        getCategories(state, action) {
            state.categories = action.payload
        }
    }
})

export const { getCategories } = categoriesSlice.actions

export default categoriesSlice.reducer