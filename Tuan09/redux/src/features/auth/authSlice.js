// src/features/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state mặc định
const initialState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action đăng nhập
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    // Action đăng xuất
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    // Action thiết lập thông tin người dùng
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Xuất các action để sử dụng trong component
export const { login, logout, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
