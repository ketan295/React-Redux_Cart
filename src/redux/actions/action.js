export const ADD = (item)=>{
    return {
        type:"ADD_TO_CART",
        payload:item
    }
}

//remove items from cart 

export const DELETE = (id)=>{
    return {
        type:"RMV_CART",
        payload:id
    }
}

// decrement in cart

export const DECREMENT = (item)=>{
    return {
        type:"DRT_CART",
        payload:item
    }
}