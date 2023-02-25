import React, { useReducer } from 'react'
import { RegForm } from '../index'
import { UpdateForm } from '../index'
import { GET_USER } from '../../graphql/query'
import { useQuery } from '@apollo/client'


// const initialState = {}
// const formReducer = (state, event) => {
//     return {
//         ...state,
//         [event.target.name]: event.target.value
//     }
// }

const Form = ({ id = undefined }) => {

    //     // const [state, dispatch] = useReducer(reducer,initialState)
    //     const [formData, setFormData] = useReducer(formReducer, initialState)
    // if (id!==undefined) {

    //     const { loading, error, data } = useQuery(GET_USER, { variables: { id } });


    //     if (loading) return <p>Loading...</p>;
    //     if (error) return <p>Error : {error.message}</p>;
    //     const { __typename, ...user } = data.user
    //     // delete user.__typename
    //     console.log(user)
    // }

    return (
        <>
            {/* <RegForm formData={formData} setFormData={setFormData} /> */}
            {/* {RegForm(formData, setFormData)} */}
            {id ? <UpdateForm data={user} id={id} /> : <RegForm />}
        </>
    )
}

export default Form
