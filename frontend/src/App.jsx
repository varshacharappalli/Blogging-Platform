import CreateBlog from "./pages/CreateBlog"
import HomePage from "./pages/HomePage"
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import {Routes, Route, Navigate} from 'react-router-dom';
import ViewMyBlogs from "./pages/ViewMyBlogs";
import ViewAllBlogs from "./pages/ViewAllBlogs";
import 'react-quill/dist/quill.snow.css';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/createBlog' element={<CreateBlog/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/viewMyBlogs' element={<ViewMyBlogs/>}/>
        <Route path='/viewAllBlogs' element={<ViewAllBlogs/>}/>
      </Routes>
    </>
  )
}

export default App
