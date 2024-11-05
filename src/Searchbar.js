import React from 'react'

function Searchbar() {
  return (
    
  <div class="relative">
    <input
      type="text"
      placeholder="Search..."
      class="pl-10 pr-4 py-2 w-80 rounded-full bg-white border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
  </div>
</div>

  )
}

export default Searchbar