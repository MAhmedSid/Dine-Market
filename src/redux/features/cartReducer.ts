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



const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state:CartState,action: PayloadAction<{product:any,quantity:number}>){

            const newItem = action.payload.product;

            const existingItem = state.items.find(item => item._id === newItem._id);
            state.totalQuantity = Number(state.totalQuantity) + Number(action.payload.quantity); 
            state.totalAmount = Number(action.payload.product.price) * Number(action.payload.quantity);
            if(!existingItem){
                const totalPrice = Number(action.payload.quantity) * Number(newItem.productPrice)
                state.items.push({...newItem, quantity:action.payload.quantity, totalPrice});
            }else{
                const totalPrice =  Number(existingItem.totalPrice) + (Number(action.payload.quantity) * Number(action.payload.product.productPrice));
                existingItem.quantity =  Number(existingItem.quantity) + Number(action.payload.quantity);
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
            existingItem!.totalPrice -= Number(existingItem!.price);
        }
        },
        incrementCartProduct(state:CartState,action:PayloadAction<string>){
            const productId = action.payload;
            const existingItem = state.items.find(item => item._id === productId);

            state.totalQuantity++ ; 
            state.totalAmount += existingItem?.price! ; 
       
            existingItem!.quantity++ ;
            existingItem!.totalPrice += Number(existingItem!.price);
        
        },
        setCart(state:CartState,action:PayloadAction<{totalQty:number,items:IProduct[]}>){
            const totalQuan =  action.payload.totalQty;
            state.totalQuantity = totalQuan;
            state.items = action.payload.items;
        }
    }
}) 

export default cartSlice.reducer;

export const { addToCart, removeProduct, decrementCartProduct, incrementCartProduct, setCart } = cartSlice.actions;
