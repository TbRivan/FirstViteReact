import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");
const loginState = createAction("LOGIN_STATE");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(loginState, (state) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("onCreate Store : ", store.getState());

store.subscribe(() => {
  console.log("Store change:", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(loginState());
