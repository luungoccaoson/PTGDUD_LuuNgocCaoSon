// src/features/auth/Auth.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './authSlice';

export default function Auth() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  // State để lưu tên và mật khẩu khi người dùng nhập
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hàm xử lý đăng nhập
  const handleLogin = () => {
    if (username === '' || password === '') {
      alert('Vui lòng nhập thông tin đầy đủ!');
      return;
    }

    // Giả lập đăng nhập, bạn có thể thay thế phần này bằng API thực tế.
    const userInfo = {
      username,
      email: `${username}@example.com`, // Giả lập email từ tên người dùng
    };

    dispatch(login(userInfo)); // Gửi thông tin người dùng vào Redux store
    setUsername('');
    setPassword('');
  };

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Quản lý Đăng Nhập</h1>

      {isLoggedIn ? (
        // Nếu đã đăng nhập
        <div className="text-center">
          <h2 className="text-xl mb-2">Chào mừng, {user.username}!</h2>
          <p>Email: {user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        // Nếu chưa đăng nhập
        <div className="w-1/3">
          <h2 className="text-xl mb-4">Đăng Nhập</h2>
          <input
            type="text"
            placeholder="Tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-2 border"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
          >
            Đăng nhập
          </button>
        </div>
      )}
    </div>
  );
}
