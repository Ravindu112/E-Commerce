import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

function SortMenu() {
  const [showSortOptions, setShowSortOptions] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => setShowSortOptions(!showSortOptions)}
        className="flex items-center px-4 py-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 focus:outline-none"
      >
        Sort By <FiChevronDown className="ml-2" />
      </button>
      {showSortOptions && (
        <div className="w-48 p-4 mt-2 bg-gray-200 rounded-md shadow-lg">
          <ul className="space-y-2">
            <li>Newest on Top</li>
            <li>Oldest on Top</li>
            <li>Price high to low</li>
            <li>Price low to high</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortMenu;
