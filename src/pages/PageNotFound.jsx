import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ConstantWideLayout } from '../components'

const PageNotFound = () => {
    const navigate = useNavigate()
    // const [cd, setCd] = useState(10)

    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         if (cd === 0) {
    //             navigate("/")
    //         }
    //         setCd(prev => prev - 1)
    //     }, 1000)

    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [cd, setCd])

    return (
        <>
            <div className='bg-white mt-16 w-full flex flex-col pt-32 justify-center items-center'>
                <ConstantWideLayout>

                    <div className='flex justify-center items-center'>

                        <div className='text-6xl font-semibold text-indigo-600 px-6'>
                            404
                        </div>
                        <div className='border-l-2 font-semibold px-6'>
                            <div className='text-2xl md:text-4xl text-gray-800'>
                                Page Not Found
                            </div>
                            <p className='text-xs md:text-base text-gray-400'>Please check the URL in address bar and try again.</p>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-center'>
                        <NavLink className="mx-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:text-white text-white font-semibold" to={`/`} >Go to Home</NavLink>
                        <NavLink className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-600 mx-2 font-semibold" to={`/contact`} >Contact Us</NavLink>
                    </div>
                    {/* <div className='mt-5 text-indigo-600'>You will redirect to <strong>Home Page</strong> in {cd} seconds</div> */}
                </ConstantWideLayout>
            </div>
        </>
    )
}

export default PageNotFound
