// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Mảng sản phẩm có sẵn
const initialProducts = [
  { id: '1', name: 'Nước suối', price: 10000, quantity: 1 },
  { id: '2', name: 'Trà tắc', price: 150000, quantity: 1 },
  { id: '3', name: 'Cơm gà', price: 35000, quantity: 1 },
];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [...initialProducts], // Giỏ hàng ban đầu có sẵn sản phẩm
  },
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // Nếu sản phẩm đã có trong giỏ, tăng số lượng
        state.cartItems[itemIndex].quantity += action.payload.quantity;
      } else {
        // Nếu sản phẩm chưa có trong giỏ, thêm mới
        state.cartItems.push(action.payload);
      }
    },
    // Xoá sản phẩm khỏi giỏ hàng
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    // Cập nhật số lượng sản phẩm trong giỏ
    updateQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
