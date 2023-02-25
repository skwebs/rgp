import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ConstantWideLayout } from '../../components';
import Indicator from '../../components/Indicator';
import Loading from '../../components/Loading';
import { UPDATE_USER } from '../../graphql/mutations';
import { GET_USER } from '../../graphql/query';

const EditUser = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        email: ""
    })
    // get id
    const { id } = useParams()
    // getting data
    const { loading, error, data } = useQuery(GET_USER, { variables: { id } });
    // UPDATA DATA
    const [updateUser, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_USER);


    // set data in useState
    useEffect(() => {
        if (data?.user) {
            const { __typename, ...user } = data?.user
            if (user) {
                setUserData(user)
            }
        }
    }, [data])

    function handleChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
        console.log(userData)
    }

    function hanldeSubmit(e) {
        e.preventDefault()

        updateUser({ variables: userData }).then(res => {
            console.log("res.data.updateUser : ", res.data.updateUser)
            navigate("/user")
        })

        // updateTodo({ variables: { id: todo.id, text, completed } });
    }



    if (loading) return <Indicator />;
    if (updateLoading) return <Indicator />;
    // if (updateLoading) return <Loading />;
    if (error) { console.log(error.message) };
    if (updateError) {
        console.log(updateError.message)
    }
    if (!data) return <p>Data not found</p>



    return (
        <div>
            <ConstantWideLayout className='pt-8 px-2'>
                <div className="px-6 py-6 lg:px-8 max-w-xl mx-auto border rounded-md overflow-hidden" >
                    <div className='flex justify-between'>
                        <h3 className="text-xl font-medium text-indigo-600 dark:text-white">Update Details</h3>
                        <button className='text-indigo-600 px-4 py-2 bg-indigo-100 rounded-md hover:bg-indigo-700 hover:text-white active:ring-2 active:ring-indigo-700 active:ring-offset-2' onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                    <form className="space-y-6" onSubmit={hanldeSubmit}>
                        {userData &&
                            <>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input onChange={handleChange} value={userData.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input onChange={handleChange} value={userData.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Email" required />
                                </div>
                            </>
                        }
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                    </form>
                </div >

            </ConstantWideLayout >

        </div >
    )
}

export default EditUser
