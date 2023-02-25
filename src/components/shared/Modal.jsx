// import { useQuery } from '@apollo/client';
// import React, { useEffect, useState } from 'react'
// import { GET_USER } from '../../graphql/query';
import { useModalStore, useOverlayStore } from '../../store/store'

import { useEffect, useState } from "react"


const Modal = ({ children, className = 'w-96', show = false }) => {
    const { modalStatus, openModal, closeModal, toggleModal } = useModalStore()

    const [showModal, setShowModal] = useState(false)
    // const closeOverlay = useOverlayStore(state => state.closeOverlay)

    // const { loading, error, data } = useQuery(GET_USER, { variables: { id } });;
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    // const { user } = data
    useEffect(() => {
        show ? setShowModal(true) : setShowModal(false)
    }, [show])
    // console.log(show)

    return (
        <>
            {showModal && <p>modal</p>}
            {/* Main modal */}
            {modalStatus &&
                <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="flex justify-center bg-black/60 backdrop-blur-sm fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full">
                    <div className={`${className} relative h-full  md:h-auto flex flex-col sm:justify-center`}>

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button onClick={() => toggleModal()} type="button" className="absolute top-3 right-2.5 bg-slate-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 lg:px-8">

                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}


export default Modal
