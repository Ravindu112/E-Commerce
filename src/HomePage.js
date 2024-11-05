import React from 'react';
import Navbar from './Navbar';
import AdvertisementSlider from './AddSlider';
import TabComponent from './TabComponent';
import Categories from './Categories';

function HomePage() {
  return (
    <div>
      <Navbar />
      <AdvertisementSlider />
      <div className='text-center text-[30px] p-10 font-semibold float-animation'>Hi Username!</div>
      <div className='flex justify-center'><div className=" w-[90%] h-1 bg-slate-300"></div></div>
      <Categories/>
      <TabComponent/>
    </div>
  );
}

export default HomePage;
