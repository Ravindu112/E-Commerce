import React from 'react';

function Navbar() {
  return (
    <div className="container px-4 mx-auto">
      <nav className="flex items-center justify-center py-4 navbar ">
        <a href="/" className="text-2xl font-bold ">S-Mart</a>
        <ul className="flex justify-center gap-8 p-4 rounded-lg">
          <li>  <div class="relative">
    <input
      type="text"
      placeholder="What are you looking for"
      class="pl-10 pr-4 py-2 w-[60rem] rounded-full bg-white border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
</svg>

  </div>
</div></li>
          <li><a href="/" className="font-semibold transition-colors duration-300 hover:text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg></a></li>
          <li><a href="/" className="font-semibold transition-colors duration-300 hover:text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
