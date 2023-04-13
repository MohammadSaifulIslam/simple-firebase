import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';


const App = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;