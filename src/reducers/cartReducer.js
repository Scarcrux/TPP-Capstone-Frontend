import * as actionTypes from '../constants/productConstants';
const initialState = {
    carts:[]
};

const cartReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TO_CART:
        let newCarts=[...state.carts];
        if(action.payload){
            let newItem = action.payload;
            newItem.qty = action.qty;
            if(newCarts.some(e => e._id == newItem._id)){
                newCarts.map(item => item._id == newItem._id ? newItem:item);
            }else{
                newCarts.push(newItem);
            }
        }
        return {
            ...state,
            carts: newCarts
        }
        case actionTypes.DELETE_FROM_CART:
            return {
                ...state,
                carts: state.carts.filter(x => x._id !== action.payload._id)
            }
        case actionTypes.CHANGE_QTY_IN_CART:
            let item = action.payload;
            item.qty = action.qty;
            return {
                    ...state,
                    carts: state.carts.map(e => e._id == item._id ? item:e)
            }
        default:
        return state;
        }

};

export default cartReducer;