import { useMutation } from '@apollo/client';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ConstantWideLayout } from '../../components';
import { CREATE_USER } from '../../graphql/mutations';
import { onError } from "@apollo/client/link/error";
import Indicator from '../../components/Indicator'


// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});



const AddUser = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [validationErrors, setValidationErrors] = useState({})
    // CREATE DATA
    const [createUser, { loading, error: err }] = useMutation(CREATE_USER, {
        onError(error) {
            console.log(error)
        }
    });

    // ===================================================================

    // const [createPost, { data }] = useMutation(CREATE_USER);

    const handleCreate = async () => {
        await createPost({
            variables: { userData },
            update(cache, { data: { createPost } }) {
                // read the current data from the cache for the query you want to update
                const data = cache.readQuery({ query: GET_POSTS });
                // update the data with the new post
                cache.writeQuery({
                    query: GET_POSTS,
                    data: { posts: [...data.posts, createPost] },
                });
            },
        });
    };

    // ===================================================================

    function handleChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
        console.log(userData)
    }

    async function hanldeSubmit(e) {
        e.preventDefault()

        const createResponse = await createUser({
            variables: userData
            // , update(cache, { data: { createUser } }) {
            //     // read the current data from the cache for the query you want to update
            //     const data = cache.readQuery({ query: GET_USERS });
            //     // update the data with the new post
            //     cache.writeQuery({
            //         query: GET_USERS,
            //         data: { posts: [...data.posts, createPost] },
            //     });
            // }
        });

        // const clientErrors = createResponse.errors.clientErrors
        // const graphQLErrors = createResponse.errors.graphQLErrors

        if (createResponse.data === undefined) {
            // on error
            if (createResponse.errors.graphQLErrors) {
                setValidationErrors(createResponse.errors.graphQLErrors[0].extensions.validation)
            }
        } else {
            // on success
            setUserData({
                name: "",
                email: "",
                password: ""
            })
            setValidationErrors({})
            navigate("/user")
        }
        // createUser({ variables: userData }).then(res => {
        //     if (res.errors?.graphQLErrors) {
        //         console.log("res.data : ", res.errors?.graphQLErrors)
        //         console.log("res.data : ", res.errors)
        //     } else {
        //         // navigate("/user")
        //     }
        // })


        // // ================================================================
        // var data = JSON.stringify({
        //     query: `mutation {
        //     createUser(
        //       name: "${userData.name}"
        //       email: "${userData.email}"
        //       password: "${userData.password}"
        //     ) {
        //       id
        //       name
        //       email
        //     }
        //   }`,
        //     variables: {}
        // });

        // var config = {
        //     method: 'post',
        //     url: 'http://127.0.0.1:8000/graphql',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {
        //         // console.log(JSON.stringify(response.data));

        //         const err = response.data.data === undefined ? "error" : "success";
        //         if (response.data.errors === undefined) {
        //             // on success
        //             console.log(response.data.data)
        //         } else {
        //             // on error
        //             console.log(response.data.errors[0].extensions.validation)
        //             // console.log(response.data.errors)
        //         }

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        // ================================================================
    }

    // return (
    //     <>
    //         { }
    //     </>
    // )
    if (loading) return <Indicator />;
    if (err) {
        console.log(err)
    }

    return (
        <div>
            <ConstantWideLayout className='pt-8 px-2'>
                <div className="px-6 py-6 lg:px-8 max-w-xl mx-auto border rounded-md overflow-hidden" >
                    <div className='flex justify-between'>
                        <h3 className="text-xl font-medium text-indigo-600 dark:text-white">Add User</h3>
                        <button className='text-indigo-600 px-4 py-2 bg-indigo-100 rounded-md hover:bg-indigo-700 hover:text-white active:ring-2 active:ring-indigo-700 active:ring-offset-2' onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                    <form className="space-y-6" onSubmit={hanldeSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input onChange={handleChange} value={userData.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Name" required />

                            {validationErrors && validationErrors.hasOwnProperty("name") && (<><small className='text-rose-500'>{validationErrors.name}</small></>)}
                            {/* {validationErrors !== null ? validationErrors.hasOwnProperty("email") ? validationErrors.email : "no" : null} */}

                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input onChange={handleChange} value={userData.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Email" required />
                            {validationErrors && validationErrors.hasOwnProperty("email") && (<><small className='text-rose-500'>{validationErrors.email}</small></>)}
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input onChange={handleChange} value={userData.password} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Password" required />
                            {validationErrors && validationErrors.hasOwnProperty("password") && (<><small className='text-rose-500'>{validationErrors.password}</small></>)}
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                    </form>
                </div >

            </ConstantWideLayout >

        </div >
    )
}

export default AddUser;
