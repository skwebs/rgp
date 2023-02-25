import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { GET_USER } from '../graphql/query';
import { useOverlayStore } from '../store/store'

const ViewUserModel = ({ id }) => {
    const closeOverlay = useOverlayStore(state => state.closeOverlay)

    const { loading, error, data } = useQuery(GET_USER, { variables: { id } });;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const { user } = data


    return (
        <>
            {/* Main modal */}
            <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="flex justify-center bg-black/60 backdrop-blur-sm fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full">
                <div className="relative w-full h-full max-w-md md:h-auto flex flex-col sm:justify-center">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => closeOverlay()} type="button" className="absolute top-3 right-2.5 bg-slate-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{user.name} details</h3>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th colSpan={3} scope="col" className="py-3 px-6">
                                            {user.name} details
                                        </th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            ID
                                        </th>
                                        <th>:</th>
                                        <td className="py-4 px-6">
                                            {user.id}
                                        </td>
                                    </tr>

                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Name
                                        </th>
                                        <th>:</th>
                                        <td className="py-4 px-6">
                                            {user.name}
                                        </td>
                                    </tr>

                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Email
                                        </th>
                                        <th>:</th>
                                        <td className="py-4 px-6">
                                            {user.email}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ViewUserModel
