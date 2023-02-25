import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ConstantWideLayout } from '../components'
import ViewUserModel from '../components/ViewUserModel'
import { GET_USERS } from '../graphql/query'
import useNetwork from '../hook/useNetwork'
import { useOverlayStore } from '../store/store'



const User = () => {

    const networkState = useNetwork();

    const [openModel, setOpenModel] = useState({
        view: false,
        register: false,
        edit: false,
    })
    const { overlayStaus, openOverlay } = useOverlayStore();
    // if (!networkState.online) return <p>No internet connetion</p>

    // fetching data
    const { loading, error, data } = useQuery(GET_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log(data.users.data)

    const viewDetails = id => {
        openOverlay()
        setOpenModel({
            view: true
        })
    }
    const editDetails = id => {
        console.log(id)
    }
    const deleteDetails = id => {
        console.log(id)
    }
    console.log("loaded file")
    return (
        <>
            {overlayStaus && <>{openModel.view && <ViewUserModel id={5} />}</>}

            <ConstantWideLayout className='px-2 pt-5'>
                <h2 className=' sm:hidden text-2xl font-semibold text-center'>User List</h2>
                <ConstantWideLayout className='flex justify-between'>
                    <div>
                        <button>Add</button>
                    </div>
                    <h2 className=' hidden sm:block text-2xl font-semibold text-center'>User List 1</h2>
                    <div>Right</div>
                </ConstantWideLayout>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6 hidden md:block">
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.data.map((user, i) =>

                                <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {i + 1}
                                    </th>
                                    <td className="py-4 px-6">
                                        {user.name}
                                    </td>
                                    <td className="py-4 px-6 hidden md:block">
                                        {user.email}
                                    </td>
                                    <td className="py-4 px-6">
                                        <NavLink to={`view/${user.id}`} onClick={() => viewDetails(user.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">View</NavLink>
                                        <NavLink to={`edit/${user.id}`} onClick={() => editDetails(user.id)} className="font-medium text-amber-600 dark:text-amber-500 hover:underline mx-2">Edit</NavLink>
                                        <button onClick={() => deleteDetails(user.id)} className="font-medium text-red-600 dark:text-blue-red border-0 focus:outline-none hover:underline mx-2 bg-transparent p-0">Delete</button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>

            </ConstantWideLayout>

        </>
    )
}

export default User
