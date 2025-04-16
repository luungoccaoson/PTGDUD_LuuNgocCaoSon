// src/features/cart/ShoppingCart.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Sản phẩm mới muốn thêm vào giỏ
  const [newItem, setNewItem] = useState({
    name: '',
    price: 0,
    quantity: 1,
  });

  // Hàm thêm sản phẩm vào giỏ
  const handleAddItem = () => {
    if (!newItem.name || newItem.price <= 0) {
      alert('Vui lòng nhập thông tin sản phẩm hợp lệ!');
      return;
    }

    // Tạo ID tự động (sử dụng thời gian hiện tại để tạo ID duy nhất)
    const newItemWithId = {
      ...newItem,
      id: Date.now().toString(),
    };

    dispatch(addItem(newItemWithId));
    setNewItem({ name: '', price: 0, quantity: 1 }); // Reset form
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Giỏ Hàng</h1>
      
      {/* Form thêm sản phẩm */}
      <div className="mb-4">
        <h2 className="text-xl">Thêm sản phẩm vào giỏ</h2>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="p-2 m-2 border"
        />
        <input
          type="text"
          placeholder="Giá sản phẩm"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
          className="p-2 m-2 border"
        />
        <input
          type="text"
          placeholder="Số lượng"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
          className="p-2 m-2 border"
        />
        <button
          onClick={handleAddItem}
          className="bg-green-500 text-white p-2 rounded-lg mt-2 hover:bg-green-600"
        >
          Thêm vào giỏ
        </button>
      </div>

      {/* Hiển thị sản phẩm trong giỏ hàng */}
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-500">Giỏ hàng của bạn đang trống</p>
      ) : (
        <ul className="w-full max-w-2xl">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex gap-2 items-center space-x-4">
                <span className="font-semibold w-30 text-left ">{item.name}</span>
                <span>{item.price} VND</span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeItem({ id: item.id }))}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Xoá
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Tổng tiền và tổng số lượng */}
      <div className="mt-6 text-xl">
        <p>Tổng số lượng: {totalQuantity}</p>
        <p>Tổng tiền: {totalPrice} VND</p>
      </div>
    </div>
  );
}
