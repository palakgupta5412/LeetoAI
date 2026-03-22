import { useState } from 'react';
import Homepage from './Pages/Homepage';
import CustomScrollbar from './Components/CustomScrollbar';

export default function App() {
  
  return (
    <div className='overflow-hidden bg-black'>
      <Homepage />
      <CustomScrollbar />
    </div>
  );
}