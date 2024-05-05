import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://fakestoreapi.com/products/";

export const getData = createAsyncThunk("items", async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};


const saveCartToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};


const initialState = {
  cart: loadCartFromStorage(),
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  loading: false,
  error: null,
};

export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.cart.push(newItem);
      }
      saveCartToStorage(state.cart)
    },
    getCarttotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = totalPrice.toFixed(2);
      state.totalQuantity = totalQuantity;
      saveCartToStorage(state.cart)
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseitemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseitemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    itemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity = [] };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addToCart,
  getCarttotal,
  removeItem,
  itemQuantity,
  increaseitemQuantity,
  decreaseitemQuantity,
} = cartslice.actions;

export default cartslice.reducer;
