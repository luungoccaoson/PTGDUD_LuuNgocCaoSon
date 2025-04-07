import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";
import EditModal from "./EditModal";
import AddUserModal from "./AddUserModal";

const DataTable = () => {
  const [users, setUsers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const tableRef = useRef(null);

  // Fetch data from MockAPI
  useEffect(() => {
    fetch("https://67e368a62ae442db76d0012e.mockapi.io/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (users.length > 0 && tableRef.current) {
      const table = $(tableRef.current).DataTable({
        data: users,
        columns: [
          {
            title: "",
            data: null,
            render: () => '<input type="checkbox" />',
            orderable: false,
            searchable: false,
          },
          { title: "Customer Name", data: "customerName" },
          { title: "Company", data: "company" },
          { title: "Order Value", data: "orderValue" },
          { title: "Order Date", data: "orderDate" },
          {
            title: "Status",
            data: "status",
            render: (data) => {
              const statusClass =
                data === "Completed"
                  ? "bg-green-100 text-green-600"
                  : data === "In progress"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-blue-100 text-blue-600";
              return `<span class="px-2 py-1 rounded-full text-sm ${statusClass}">${data}</span>`;
            },
          },
          {
            title: "Actions",
            data: null,
            render: (data, type, row) =>
              `<button class="edit-btn text-blue-500 hover:underline">Edit</button>`,
            orderable: false,
            searchable: false,
          },
        ],
        pageLength: 6,
        lengthMenu: [5, 10, 25, 50, 100],
        dom: "rtip", // Remove default search and length change controls
      });

      // Handle Edit button click
      $(tableRef.current).on("click", ".edit-btn", function () {
        const data = table.row($(this).parents("tr")).data();
        setSelectedUser(data);
        setIsEditModalOpen(true);
      });

      // Cleanup DataTable on component unmount
      return () => {
        table.destroy();
      };
    }
  }, [users]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 ">
          <img src="/img/File text 1.png" alt="" className="w-8"/>
          <h2 className="text-2xl font-bold">Detailed Report</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            className="flex gap-1 bg-white text-pink-500 border border-pink-500 px-4 py-2 rounded-lg mr-2 cursor-pointer"
            onClick={() => setIsAddModalOpen(true)}
          >
            <img src="/img/Download.png" alt="" className="pointer-events-none"/> Import
          </button>
          <button 
            className="flex gap-1 bg-white text-pink-500 border border-pink-500 px-4 py-2 rounded-lg mr-2 cursor-pointer">
            <img src="/img/Move up.png" alt="" className="pointer-events-none"/> Export
          </button>
        </div>
      </div>

      <table
        ref={tableRef}
        className="w-full text-left table-auto border border-gray-300 rounded-lg"
        style={{ width: "100%" }}
      >
        <thead>
          <tr className="text-gray-700 text-xl bg-gray-100">
            <th></th>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Order Value</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

      {/* Modals */}
      {isEditModalOpen && (
        <EditModal
          user={selectedUser}
          onClose={() => setIsEditModalOpen(false)}
          onSave={(updatedUser) => {
            setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
            setIsEditModalOpen(false);
          }}
        />
      )}
      {isAddModalOpen && (
        <AddUserModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={(newUser) => {
            setUsers([...users, newUser]);
            setIsAddModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default DataTable;