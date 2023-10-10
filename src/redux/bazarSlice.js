import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null,
};

export const bazarSlice = createSlice({
    name: "bazar",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const product = state.productData.find(p => p._id === action.payload._id)
            if(product){ //product is in cart
                product.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload);
            }
        },


    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = bazarSlice.actions;
export default bazarSlice.reducer;