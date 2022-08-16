import logo from "./logo.svg";
import "./App.css";
import BaiTapLayout from "./BaiTapLayoutComponent/BaiTapLayout";
import BaiTapGlasses from "./BaiTapState/BaiTapGlasses";
import ExersiseCart from "./BaiTapProp/ExersiseCart";
import { Outlet, NavLink } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark bg-success">
        <NavLink className="navbar-brand" to="/component">
          Nguyễn Duy Khang
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-dark text-white nav-link" : "nav-link"
                }
                to="/component"
              >
                Bài tập Layout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-dark text-white nav-link" : "nav-link"
                }
                to="/state"
              >
                Bài tập Glasses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-dark text-white nav-link" : "nav-link"
                }
                to="/prop"
              >
                Bài tập giỏ hàng
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-dark text-white nav-link" : "nav-link"
                }
                to="/reduxform"
              >
                Bài tập Redux Form
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
