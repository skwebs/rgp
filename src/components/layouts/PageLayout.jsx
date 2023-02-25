import React, { Fragment } from 'react'

const PageLayout = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1600px] mx-auto px-2 sm:px-4`}>{children}</div>
  )
}

export default PageLayout
