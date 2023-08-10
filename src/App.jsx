import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Login  from "./components/Login"
import { Home } from "./components/Home"
import { Header } from "./components/Header"
import { RequireAuth } from "./components/RequireAuth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserAuth } from "./redux/actions"
function App() {

  const dispatch = useDispatch();
  const user = useSelector(state=>state.userState);
  // console.log(user);
  useEffect(()=>{
    dispatch(getUserAuth())
  },[])
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<RequireAuth>
            <div className="mx-auto max-w-[1200px] px-2">
              <Header />
              <Home />
            </div>
          </RequireAuth>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
