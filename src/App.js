import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./components/course/Course";
import Login from "./components/login/Login";
import Logindata from "./components/login/Logindata";
import Transferdata from "./components/Transferdata";


function App() {
  return (
    <div>
      {/* <Transferdata username="Christo" password="12345" usertype="Admin"/> */}
      {/* <Login/> */}
      {/* <Course/> */}
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login/>}/>
        <Route path={'/Ldata'} element={<Logindata/>}/>
        <Route path={'/course'} element={<Course/>}/>
      </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
