import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BaiTapLayout from "./BaiTapLayoutComponent/BaiTapLayout";
import BaiTapGlasses from "./BaiTapState/BaiTapGlasses";
import ExersiseCart from "./BaiTapProp/ExersiseCart";
import BaiTapForm from "./BaiTapForm/BaiTapForm";
// redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<BaiTapLayout/>}></Route>
          <Route path="component" element={<BaiTapLayout />}></Route>
          <Route path="state" element={<BaiTapGlasses />}></Route>
          <Route path="prop" element={<ExersiseCart />}></Route>
          <Route path="reduxform" element={<BaiTapForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
