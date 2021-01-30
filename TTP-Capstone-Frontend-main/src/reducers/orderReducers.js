import { TramRounded } from '@material-ui/icons';
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, LIST_MY_ORDER, LIST_MY_ORDER_REQUEST,
FETCH_ORDER, FETCH_ORDER_REQUEST, DELETE_ORDER, DELIVER_ORDER } from '../constants/orderConstants';
function createOrderReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { loading: true };
    case CREATE_ORDER_SUCCESS:
      return { loading: false, order: action.payload, success: true };
    case CREATE_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
function listMyOrderReducer(state = {}, action){
  switch(action.type){
    case LIST_MY_ORDER_REQUEST:
      return { loading:true };
    case LIST_MY_ORDER:
      return {
        ...state,
        myOrder: action.payload,
        loading: false,
        success: true
      }
    default: return state;
  }
}

function listAllOrderReducer(state = {}, action){
  switch(action.type){
    case FETCH_ORDER_REQUEST:
      return {
          loading:true
      };
    case FETCH_ORDER:
      return {
        ...state,
        loading:false,
        orders: action.payload,
        success: true
      }
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(item => item._id !== action.payload._id)
      }
    case DELIVER_ORDER:
      console.log(action.payload);
      return {
        ...state,
        orders: state.orders.map(item => item._id != action.payload._id ? item:action.payload)
      }
    default: return state;
  }
}
export {
  createOrderReducer,
  listMyOrderReducer,
  listAllOrderReducer
}