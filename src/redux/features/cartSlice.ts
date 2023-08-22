import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";

interface CartState {
    items: Array<IProduct>;
    totalAmount: number;
    totalQuantity: number;
}

const initialState: CartState = {
    items:[],
    totalAmount:0,
    totalQuantity:0,
}



export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state:CartState,action: PayloadAction<{product:IProduct,quantity:number}>){

            const newItem = action.payload.product;
            const existingItem = state.items.find(item => item._id === newItem._id);
            state.totalQuantity += action.payload.quantity; 
            state.totalAmount += action.payload.product.price * action.payload.quantity;
            if(!existingItem){
                const totalPrice = action.payload.quantity * newItem.price
                state.items.push({...newItem, quantity:action.payload.quantity, totalPrice});
            }else{
                const totalPrice =  existingItem.totalPrice + action.payload.quantity * action.payload;


            }
        }
    }
})
