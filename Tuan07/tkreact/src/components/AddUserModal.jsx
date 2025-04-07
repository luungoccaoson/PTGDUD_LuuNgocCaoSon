import { useState } from "react";

const AddUserModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch("https://67e368a62ae442db76d0012e.mockapi.io/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => onAdd(data))
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center shadow-lg z-50">
      <div className="bg-white border-1 p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add User</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Customer Name"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="number"
            name="orderValue"
            value={formData.orderValue}
            onChange={handleChange}
            placeholder="Order Value"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            placeholder="Order Date"
            className="w-full p-2 border rounded-lg"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="New">New</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-200 rounded-lg">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-pink-500 text-white rounded-lg">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};


export default AddUserModal;
