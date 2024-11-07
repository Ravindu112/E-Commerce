import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaFemale, FaChild, FaMale } from 'react-icons/fa';

function CategoryMenu() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="relative flex flex-col items-start">
      <button
        onClick={() => setShowCategories(!showCategories)}
        className="flex items-center px-4 py-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 focus:outline-none"
      >
        <FiMenu className="mr-2" />
        Categories
      </button>
      {showCategories && (
        <div className="w-48 p-4 mt-2 bg-gray-200 rounded-md shadow-lg">
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaFemale className="mr-2" /> Ladies' Section
            </li>
            <li className="flex items-center">
              <FaChild className="mr-2" /> Kids' Section
            </li>
            <li className="flex items-center">
              <FaMale className="mr-2" /> Gents' Section
            </li>
            <li>Accessories</li>
            <li>Sarees</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoryMenu;
