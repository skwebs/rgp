import { useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { ConstantWideLayout } from '../components'
import Indicator from '../components/Indicator'
import { TRASH_USER } from '../graphql/mutations'
import { GET_USERS } from '../graphql/query'
import useNetwork from '../hook/useNetwork'
import { useOverlayStore } from '../store/store'
import { FaPen } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'

const User = () => {

    const navigate = useNavigate();
    const { overlayStaus, openOverlay } = useOverlayStore();

    // fetching data
    const { loading, error, data: userData, refetch } = useQuery(GET_USERS, { variables: { first: 10 } });
    // delete user
    // const [trashUser, { loading: trashLoading, error: trashError }] = useMutation(TRASH_USER);

    // function trashDetails(id) {
    //     trashUser({ variables: { id: id } }).then(res => {
    //         console.log(res)
    //         console.log("res.data.trashUser : ", res.data.trashUser)

    //         // navigate("/user")
    //     })
    // }

    // const [trashUser, { loading, error }] = useMutation(DELETE_ITEM_MUTATION);
    const [trashUser, { loading: trashLoading, error: trashError }] = useMutation(TRASH_USER);

    function addUserDetails() {
        navigate(`add`)
    }
    function viewUserDetails(id) {
        navigate(`${id}`)
    }
    function editUserDetails(id) {
        navigate(`${id}/edit`)
    }

    async function trashDetails(id) {
        const { data } = await trashUser({
            variables: { id: id },
            update: (cache, { }) => {
                // Read the data from our cache for this query.
                const data = cache.readQuery({ query: GET_USERS });
                // Remove the deleted item from the cache
                console.log(data)
                // data.items = data.items.filter(i => i.id !== trashUser.id);
                // Write the data back to the cache.
                cache.writeQuery({ query: GET_USERS, data });
            }
        });
        console.log(data)
        refetch()
    }

    // const [deletePost, { data }] = useMutation(DELETE_POST, {
    //     update(cache, { data: { deletePost } }) {
    //         const data = cache.readQuery({ query: GET_POSTS });
    //         const updatedData = data.posts.filter((post) => post.id !== deletePost.id);
    //         cache.writeQuery({ query: GET_POSTS, data: { posts: updatedData } });
    //     },
    // });


    if (loading || trashLoading) return <Indicator />
    if (error) { console.log(error) }
    if (trashError) { console.log(trashError) }

    return (
        <>
            <ConstantWideLayout className='px-2 pt-10'>
                <div className='flex justify-between py-2 items-center'>
                    {/*
                    <button className='text-indigo-600' > Add User</button> */}
                    <button onClick={() => addUserDetails()} className='text-indigo-600 px-4 py-2 bg-indigo-100 rounded-md hover:bg-indigo-700 hover:text-white active:ring-2 active:ring-indigo-700 active:ring-offset-2' to='add'>Add User</button>
                    <h3 className="text-xl font-medium text-indigo-600 dark:text-white">User List</h3>
                    <div> </div>
                </div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    S.N.
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.users.data.map((user, i) =>

                                <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="py-2 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {i + 1}
                                    </th>
                                    <td className="py-2 px-4">
                                        {user.id}
                                    </td>
                                    <td className="whitespace-nowrap py-2 px-4">
                                        {user.name}
                                    </td>
                                    <td className="whitespace-nowrap py-2 px-4">
                                        {user.email}
                                    </td>
                                    <td className="py-1">
                                        <div className="inline-flex rounded-md shadow-sm" role="group">
                                            <button onClick={() => viewUserDetails(user.id)} type="button" className="inline-flex items-center px-2 py-2 text-sm font-medium bg-white border border-gray-200 rounded-l-lg hover:bg-blue-100 text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                                <AiFillEye size={22} />
                                            </button>
                                            <button onClick={() => editUserDetails(user.id)} type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-amber-500 bg-white border-t border-b border-gray-200 hover:bg-amber-100 focus:z-10 focus:ring-2 focus:ring-amber-500 focus:text-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-teal-500 dark:focus:text-white">
                                                <FaPen />
                                            </button>
                                            <button onClick={() => trashDetails(user.id)} type="button" className="inline-flex items-center px-2 py-2 text-sm font-medium text-rose-700 bg-white border border-gray-200 rounded-r-md hover:bg-rose-100 focus:z-10 focus:ring-2 focus:ring-rose-700 focus:text-rose-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-rose-500 dark:focus:text-white">
                                                <BiTrash size={20} />
                                            </button>
                                        </div>
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
