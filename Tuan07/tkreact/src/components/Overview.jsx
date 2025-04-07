import { useState, useEffect } from "react";

const Overview = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://67e368a62ae442db76d0012e.mockapi.io/overView")
      .then((res) => res.json())
      .then((dt) => {
        setData(dt);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 py-4">
          <img src="/img/Squares four 1.png" alt="" className="w-8"/>
          <h3 className="text-2xl font-bold">Overview</h3>
        </div>
      
        <div className="grid grid-cols-3 gap-4 h-full">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 p-6 rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-103 ${
                index === 0 ? 'bg-pink-100' : 'bg-blue-50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col text-left gap-5">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-4xl font-bold uppercase">${item.value.toLocaleString('en-US', { minimumFractionDigits: 0 })}</p>
                </div>
                <img src={item.img} alt="" className="w-12"/>
              </div>          
              <div className="flex gap-1 p-1">
                <p className="text-left text-xl text-green-600">{item.change}%</p> 
                <p className="text-gray-400 text-xl">period of change</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Overview;