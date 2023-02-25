import React from 'react'
import { Outlet } from 'react-router-dom'
import useNetwork from '../hook/useNetwork'
import Navbar from './Navbar'

const RootLayout = () => {
    const networkState = useNetwork();
    return (
        <>
            <div className='relative flex flex-col min-h-screen'>
                <header className='flex-grow-0 sticky top-0 left-0 z-40 '>
                    <Navbar />
                    {networkState.online ? "" : <div className='bg-red-500 text-white text-center'>No Internet Connection</div>}
                </header>
                <main className='relative flex-1'>
                    <Outlet />
                </main>
                <footer className='relative flex-grow-0'>
                    {/* <Footer /> */}
                </footer>
            </div>
        </>
    )
}

export default RootLayout
