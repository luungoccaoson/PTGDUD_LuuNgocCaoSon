// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Tạo slice cho cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }

      // Cập nhật lại tổng số lượng và tổng tiền
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    // Xóa sản phẩm khỏi giỏ
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      // Cập nhật lại tổng số lượng và tổng tiền
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    // Cập nhật số lượng sản phẩm trong giỏ
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }

      // Cập nhật lại tổng số lượng và tổng tiền
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});

// Xuất các action để sử dụng trong component
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
