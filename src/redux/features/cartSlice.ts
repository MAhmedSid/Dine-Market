import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";

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
                const totalPrice =  existingItem.totalPrice + action.payload.quantity * action.payload.product.price;
                existingItem.quantity += action.payload.quantity;
                existingItem.totalPrice = totalPrice;
            }
        },
        removeProduct(state:CartState,action:PayloadAction<string>){

            const productId = action.payload;

            state.items = state.items.filter(item => item._id !== productId);
            state.totalQuantity = state.items.reduce((total,item )=> total + item.quantity,0);
            state.totalAmount = state.items.reduce((total,item)=> total + item.totalPrice,0);

        },
        decrementCartProduct(state:CartState,action:PayloadAction<string>){
            const productId = action.payload;
            const existingItem = state.items.find(item => item._id === productId);

            state.totalQuantity-- ; 
            state.totalAmount -= existingItem?.price! ; 
        if(existingItem?.quantity === 1){
            state.items = state.items.filter(item => item._id !== productId);
        }else{
            existingItem!.quantity-- ;
            existingItem!.totalPrice -= existingItem!.price;
        }
        },
        incrementCartProduct(state:CartState,action:PayloadAction<string>){
            const productId = action.payload;
            const existingItem = state.items.find(item => item._id === productId);

            state.totalQuantity++ ; 
            state.totalAmount += existingItem?.price! ; 
       
            existingItem!.quantity++ ;
            existingItem!.totalPrice += existingItem!.price;
        
        },
    }
})

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
