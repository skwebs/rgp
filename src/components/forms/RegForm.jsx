import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
const initialState = {}
const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const RegForm = () => {

    const inputs = [
        {
            label: "Name", name: "name", id: "name", type: "text",
            placeholder: "Enter Name", required: true, pattern: "/^(A-Za-z){3-30}$/",
            errMsg: "Name is required & must be min 3 and max 30 charactors"
        },
        {
            label: "Email", name: "email", id: "email", type: "email",
            placeholder: "Enter Email", required: true, errMsg: "Email is required "
        },
        {
            label: "Name", name: "name", id: "name", type: "text",
            placeholder: "Enter Name", required: true,
            pattern: "/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#\$%\^&\*])[A-Za-z\d!@#\$%\^&\*]{8,20}$/",
            errMsg: "Password must be min 8 and max 20 characters and contain at least one digit, one capital letter, one small letter and one special character"
        }
    ]
    // const [state, dispatch] = useReducer(reducer,initialState)
    const [formData, setFormData] = useReducer(formReducer, initialState)

    function hanldeSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Registration Form</h3>
                <form className="space-y-6" onSubmit={hanldeSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input onChange={setFormData} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={setFormData} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Email" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input onChange={setFormData} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    {/* <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input onChange={setFormData} id="remember" type="checkbox" defaultValue name='remember' className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <Link to={`/`} className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
                    </div> */}
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegForm
