import { useState } from 'react';
import Homepage from './Pages/Homepage';
import CustomScrollbar from './Components/CustomScrollbar';
import Plasma from './Components/Plasma.jsx';

export default function App() {
  return (

    <div className='min-h-screen'>

      <div style={{ width: '100%', height: '700px', position: 'absolute' }}>
        <Plasma 
          color="#ff6b35"
          speed={0.9}
          direction="reverse"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      <Homepage />
      <CustomScrollbar />
    </div>
  );
}