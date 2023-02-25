import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import User from './pages/User'
import AddUser from './pages/user/AddUser'
import AddUserForm from './pages/user/AddUserForm'
import EditUser from './pages/user/EditUser'
import ViewUser from './pages/user/ViewUser'


function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='/user'>
            <Route index element={<User />} />
            <Route path='add' element={<AddUser />} />
            <Route path='add-user' element={<AddUserForm />} />
            <Route path=':id' element={<ViewUser />} />
            <Route path=':id/edit' element={<EditUser />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
