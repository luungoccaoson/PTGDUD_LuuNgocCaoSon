// src/features/cart/ShoppingCart.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  // Danh sách sản phẩm để hiển thị
  const products = [
    { id: '1', name: 'Nước suối', price: 10000, quantity: 1 },
    { id: '2', name: 'Trà tắc', price: 150000, quantity: 1 },
    { id: '3', name: 'Cơm gà', price: 35000, quantity: 1 },
    { id: '4', name: 'Bún bò', price: 40000, quantity: 1 },
  ];

  // Hàm thêm sản phẩm vào giỏ
  const handleAddItem = (product) => {
    const productToAdd = { ...product, quantity: 1 }; // Sản phẩm với số lượng mặc định là 1
    dispatch(addItem(productToAdd));
  };

  // Hàm giảm số lượng sản phẩm trong giỏ
  const handleDecrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  // Hàm tăng số lượng sản phẩm trong giỏ
  const handleIncrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
  };

  // Hàm xóa sản phẩm khỏi giỏ
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Danh Sách Sản Phẩm</h1>

      {/* Hiển thị danh sách sản phẩm */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md bg-white shadow-md">
            <h2 className="text-xl">{product.name}</h2>
            <p>{product.price} VND</p>
            <button
              onClick={() => handleAddItem(product)}
              className="mt-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>

      {/* Hiển thị giỏ hàng */}
      <h2 className="text-2xl font-semibold mb-4">Giỏ Hàng</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">Giỏ hàng của bạn đang trống</p>
      ) : (
        <ul className="w-full max-w-2xl">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex gap-2 items-center space-x-4">
                <span className="font-semibold">{item.name}</span>
                <span>{item.price} VND</span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Xoá
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Hiển thị tổng số lượng và tổng tiền */}
      <div className="mt-6 text-xl">
        <p>Tổng số lượng: {totalQuantity}</p>
        <p>Tổng tiền: {totalPrice} VND</p>
      </div>
    </div>
  );
}
