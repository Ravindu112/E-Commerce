import React from 'react'

function CategoryItem() {
  return (
    <div>
    {/* Product Image */}
    <div className="relative">
     <div className='flex justify-center'><a href=''> <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyiXYQlJYE6rBuS5BqGgFtNZmDvfjF5snFw&s"
        alt="Product"
        className="object-cover rounded-lg w-[100px] h-[100px]"
      /></a></div>
      <div className='flex justify-center'><div className='text-[15px] p-5 font-semibold'>Category</div></div>
    </div>
    </div>
    
  )
}

export default CategoryItem