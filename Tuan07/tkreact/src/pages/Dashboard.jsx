import Overview from "../components/Overview";
import DataTable from "../components/DataTable";


const Dashboard = () => {
  return (
    <>
      <div className="flex bg-white bg-opacity-80 p-4 items-center justify-between text-center text-xl font-semibold border-b-2 border-gray-100 shadow-md">
        <h1 className="text-pink-500 font-bold text-2xl">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className='flex bg-gray-100 gap-1 rounded-lg w-100'>
            <img src="/img/Search.png" className='w-9 px-1 py-2 px-2 cursor-pointer' alt="" />
            <input 
              className='border-none outline-none py-1 ' 
              type="text" 
              name="" 
              id="" 
              placeholder='Search...'/>
          </div>
          <img src="/img/Bell 1.png" alt="" className="w-8 cursor-pointer"/>
          <img src="/img/Question 1.png" alt="" className="w-8 cursor-pointer"/>
          
          <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden cursor-pointer">
            <img src="/img/Avatar 313.png" alt="" className="w-full h-full object-cove"/>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Overview />
      </div>

      <div className="p-4">
        <DataTable />
      </div>
    </>
  );
};

export default Dashboard;