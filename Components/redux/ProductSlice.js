import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    products:[
        {
          id:1,
            image:require('../../assets/tshirt.jpg'),
            title:"Tshirt",
            discount:"50%off",
            price:150
          },
          {
            id:2,
            image:require('../../assets/saree.jpg'),
            title:"saree",
            discount:"50%off",
            price:100
          },
          {
            id:3,
            image:require('../../assets/mobile.jpg'),
            title:"mobile",
            discount:"50%off",
            price:100
          },
          {
            id:4,
            image:require('../../assets/laptop.jpg'),
            title:"laptop",
            discount:"50%off",
            price:100
          },
    ],
    cart:[]
}

export const ProductReducer=createSlice({
    name:"slice",
    initialState,
    reducers:{
        AddToCart:(state,action)=>{
            let updateCart=[...state.cart]
            if(!state.cart.includes(action.payload)){
                updateCart=[...state.cart,action.payload]
            }
            return {...state,cart:updateCart}
        },
        RemoveCart:(state,action)=>{
          let updateCart=[...state.cart]
         let filteredCart= updateCart.filter((item,index)=>item.id!==action.payload)
         return {...state,cart:filteredCart}
        }
    }
})
export const {AddToCart,RemoveCart}=ProductReducer.actions
export default ProductReducer.reducer