import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import { CREATE_USER } from '../../graphql/mutations';

// const ADD_USER = gql`
//   mutation AddUser($name: String!, $email: String!) {
//     addUser(name: $name, email: $email) {
//       id
//       name
//       email
//       errors {
//         message
//       }
//     }
//   }
// `;

function AddUserForm() {
    const [addUser, { data, error, loading }] = useMutation(CREATE_USER);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ variables: formData }).then(
            (response) => {
                console.log(response)
                // const { errors } = response.data.addUser;
                // if (errors && errors.length > 0) {
                //     setErrors(errors);
                // } else {
                //     setSuccess(true);
                //     setFormData({ name: '', email: '' });
                // }
            },
            (error) => {
                setErrors([{ message: 'An unknown error occurred' }]);
            }
        );
    };
    return (
        <form onSubmit={handleSubmit}>
            {errors.length > 0 && (
                <div className="errors">
                    {errors.map((error) => (
                        <div key={error.message}>{error.message}</div>
                    ))}
                </div>
            )}
            {success && <div className="success">User added successfully!</div>}
            {/* ========================================================================= */}

            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input onChange={handleChange} value={formData.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Name" required />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={handleChange} value={formData.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Email" required />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input onChange={handleChange} value={formData.password} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Password" required />
            </div>

            {/* ========================================================================= */}
            {/* <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            /> */}
            <button type="submit">Add User</button>
        </form>
    )
}


export default AddUserForm
