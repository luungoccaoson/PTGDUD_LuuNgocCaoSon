import { NavLink } from "react-router-dom";
import { FaProjectDiagram, FaUsers, FaChartBar, FaEnvelope, FaPlug } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white shadow-md h-full p-4 overflow-y-auto">
        <div className="mb-8">
          <img src="/img/Image 1858.png" alt="" className="h-12"/>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-xl p-2 rounded-lg ${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="/img/Squares four 1.png" alt="" /> 
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-xl p-2 rounded-lg ${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="/img/Folder.png" alt="" /> 
                <p>Projects</p> 
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-xl p-2 rounded-lg ${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="/img/Groups.png" alt="" />  
                <p>Teams</p>  
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-xl p-2 rounded-lg ${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="/img/Pie chart.png" alt="" /> 
                <p>Analytics</p>  
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/messages"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-xl p-2 rounded-lg ${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="/img/Chat.png" alt="" /> 
                <p>Messages</p>  
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/integrations"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-xl p-2 rounded-lg ${
                    isActive ? "bg-pink-500 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="/img/Code.png" alt="" /> 
                <p>Integrations</p>  
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col mt-10 bg-blue-50 p-4 rounded-lg flex items-center gap-5 py-15">
          <img src="/img/Group.png" alt="" className="mx-auto my-auto"/>
          <h3 className="text-2xl font-bold">V2.0 is available</h3>
          <button className="bg-white border-2 border-blue-400 rounded-lg w-10/12 py-2 text-blue-400 text-xl cursor-pointer">Try now</button>
        </div>
      </div>
      
    </>
    
  );
};

export default Sidebar;