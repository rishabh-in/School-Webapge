import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;



