import React from 'react'

const WithinOverlayout = ({ children }) => {
    return (
        <div className='absolute inset-0 bg-black/70 z-10 flex justify-center items-center'>
            {children}
        </div>
    )
}

export default WithinOverlayout
