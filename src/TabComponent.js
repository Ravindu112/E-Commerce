import React, { useState } from 'react';
import ProductList from './ProductList';

function TabComponent() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div>
      <div className='text-[50px] p-10 font-semibold pl-[120px]'>Best Sales</div>
    <div className="flex flex-col items-center p-10">
      {/* Tab Headers */}
      <div className="flex p-5 my-4 space-x-72">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('All')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Following' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('Following')}
        >
          Following
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Premium' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('Premium')}
        >
          Premium
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full p-6 bg-gray-100 rounded max-w-7xl">
        {activeTab === 'All' && <div><div className='text-center text-[40px] p-4 font-semibold '>All</div><ProductList/></div>}
        {activeTab === 'Following' && <div><div className='text-center text-[40px] p-4 font-semibold '>Following</div><ProductList/></div>}
        {activeTab === 'Premium' && <div><div className='text-center text-[40px] p-4 font-semibold text-yellow-400 '>Premium</div><ProductList/></div>}
      </div>
    </div>
    </div>
  );
}

export default TabComponent;
