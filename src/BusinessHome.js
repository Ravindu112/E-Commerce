import React from 'react'
import Navbar from './Navbar';
import FollowerCard from './FollowerCard';
import CategoryMenu from './CategoryMenu';
import SortMenu from './SortMenu';
import ProductList from './ProductList';

function BusinessHome() {
  return (
    <div><Navbar/><FollowerCard/><CategoryMenu/><SortMenu/><ProductList/></div>
  )
}

export default BusinessHome