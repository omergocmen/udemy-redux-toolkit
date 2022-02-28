import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authControl } from "../login/loginSlice";


export default function Navbar() {
  const userIn=useSelector(state=>state.login.userIn)
  const dispatch=useDispatch();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <div class="container-fluid">
        <Link className="navbar-brand" to ="/">Academy</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <Link className="nav-link" to="/courses">
                Kurslar
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/teachers">
                Öğretim Görevlileri
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            {userIn.auth?<Link class="btn btn-success" onClick={()=>{dispatch(authControl())}}  to="/login">Çıkış Yap</Link>:<Link class="btn btn-success" to="/login">Giriş Yap</Link>}
          </form>
        </div>
      </div>
    </nav>
  );
}
