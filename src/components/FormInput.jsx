import React from 'react'

const FormInput = (props) => {
    const { label, onChange, ...inputProps } = props
    return (
        <>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input onChange={setFormData} {...inputProps} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Name" required />
        </>
    )
}

export default FormInput
