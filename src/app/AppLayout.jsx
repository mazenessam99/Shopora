import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (

    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex justify-center items-center p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout