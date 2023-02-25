// import { useState } from "react"
// import { ConstantWideLayout, Form, Modal } from "../components"
// import { useModalStore } from "../store/store"

// const Contact = () => {
//     // const { modalOpen, openModal, closeModal } = useModalStore()
//     return (
//         <>
//             <div>
//                 <ConstantWideLayout>
//                     <h2>Contact</h2>
//                     {/* <Modal className='max-w-md' show={true}>
//                         <Form />
//                     </Modal> */}
//                     <button className="bg-red-700" onClick={setOpenModal(true)}>Open</button>
//                 </ConstantWideLayout>
//             </div>

//         </>
//     )
// }

// export default Contact

import React, { useState } from 'react'
import Modal from '../components/shared/Modal'
import { useModalStore } from '../store/store'

const Contact = () => {
    const { toggleModal } = useModalStore()
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <Modal show={openModal}>Modal</Modal>
            <button className="bg-red-700" onClick={() => toggleModal()}>Open</button>
        </div>
    )
}

export default Contact
