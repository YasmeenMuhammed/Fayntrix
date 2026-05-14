import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import PageLoader from '../../Components/PageLoading';

export default function Layout() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      <PageLoader isLoading={loading} />

      <Navbar />
      <div className="mt-10 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
