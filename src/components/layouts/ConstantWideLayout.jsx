import React from 'react'

const ConstantWideLayout = ({ children, className = "" }) => {
    return (
        <div className={`${className} max-w-[1600px] mx-auto `}>{children}</div>
    )
}

export default ConstantWideLayout
