import { legacy_createStore } from "redux";

// Reducer
const cartReducer = (
  // Inisialisasi awal state
  state = {
    cart: [{ id: 1, qty: 10 }],
  },
  action
) => {
  switch (action.type) {
    // Action ADD_TO_CART
    case "ADD_TO_CART":
      return {
        // Jangan lupa menambahkan spread operator agar state yang lainnya tidak hilang
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
// Membuat Store dari reducer yang sudah dibuat
const store = legacy_createStore(cartReducer);
console.log("onCreate Store : ", store.getState());

// Subscribe
// Untuk mengecek state sekarang dapat menggunakan fungsi subscribe
store.subscribe(() => {
  console.log("Store change:", store.getState());
});

// Dispatch
// Menambahkan payload baru dengan type action ADD_TO_CART
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
