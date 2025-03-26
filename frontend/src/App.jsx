import CreateBlog from "./pages/CreateBlog"
import HomePage from "./pages/HomePage"
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import {Routes, Route, Navigate} from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/createBlog' element={<CreateBlog/>}/>
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
