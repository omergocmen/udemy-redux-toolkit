import Courses from "./components/courses/courses";
import Navbar from "./components/rootComponents/navbar";
import Footer from "./components/rootComponents/footer";
import Carousel from "./components/rootComponents/mainCarousel";
import Teachers from "./components/teachers/teachers";
import Teacher from "./components/teachers/teacher";
import Main from "./components/rootComponents/main";
import Login from "./components/login/login";
import React, { useEffect } from "react";
import { getCourses } from "./components/courses/coursesSlice";
import { getTeachers } from "./components/teachers/teachersSlice";
import { useDispatch, useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navigate} from 'react-router'

function App() {
  const userIn = useSelector((state) => state.login.userIn);
  const auth = userIn.auth;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
    dispatch(getTeachers());
  }, []);
console.log(auth)

  if(!auth)
  {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Main />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/courses" exact element={<Navigate to ="/login" />}></Route>
            <Route path="teachers" exact element={<Navigate to ="/login" />}></Route>
            <Route path="teachers/:id" exact element={<Navigate to ="/login" />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }else{
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Main />}></Route>
            <Route path="/login" exact element={<Navigate to ="/" />}></Route>
            <Route path="/courses" exact element={<Courses />}></Route>
            <Route path="teachers" exact element={<Teachers />}></Route>
            <Route path="teachers/:id" exact element={<Teacher />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
