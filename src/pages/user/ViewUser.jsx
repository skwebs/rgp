import { useQuery } from "@apollo/client"
import { Link, NavLink, useNavigate, useParams } from "react-router-dom"
import { ConstantWideLayout } from "../../components"
import Indicator from "../../components/Indicator"
import Loading from "../../components/Loading"
import { GET_USER } from "../../graphql/query"


const ViewUser = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { loading, error, data } = useQuery(GET_USER, { variables: { id } });
    if (loading) return <Indicator />
    if (error) { console.log(error) }
    if (!data) return <>No data found</>
    const { user } = data

    return (
        <div>
            <ConstantWideLayout className='pt-8 px-2'>
                <div className="px-6 py-6 lg:px-8 max-w-xl mx-auto border rounded-md overflow-hidden" >
                    <div className='flex justify-between'>
                        <h3 className="text-xl font-medium text-indigo-600 dark:text-white">User Details</h3>
                        <button className='text-indigo-600 px-4 py-2 bg-indigo-100 rounded-md hover:bg-indigo-700 hover:text-white active:ring-2 active:ring-indigo-700 active:ring-offset-2' onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
            </ConstantWideLayout>
        </div>
    )
}

export default ViewUser
