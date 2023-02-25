// import { About, AddUser, AddUserForm, Contact, EditUser, Home, PageNotFound, ViewUser } from './pages';
import RootLayout from './components/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import AddUser from './pages/user/AddUser';
import AddUserForm from './pages/user/AddUserForm';
import ViewUser from './pages/user/ViewUser';
import EditUser from './pages/user/EditUser';
import PageNotFound from './pages/PageNotFound';


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact /> 
            },
            {
                path: "/user",
                element: <User />
            },
            {
                path: "/user/add",
                element: <AddUser />
            },
            {
                path: "/user/add-user",
                element: <AddUserForm />
            },
            {
                path: "/user/:id",
                element: <ViewUser />
            },
            {
                path: "/user/:id/edit/",
                element: <EditUser />
            }
        ]
    }
])


export default router
