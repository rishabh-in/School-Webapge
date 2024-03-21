import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import './styles/common.css'
import { STRIPE_BASE_URL } from './Constant/constant';
import Loading from './Components/Common/Loading';

const App = () => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const checkServer = async() => {
      try {
        const response = await fetch(STRIPE_BASE_URL);
        if(response.ok) {
          setLoading(false);
        }
      } catch (error) {
        setLoading(true)
      }
    }
    checkServer()
  }, [])

  if(loading) {
    return <Loading />
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;



