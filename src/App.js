import UserForm from "./components/User/UserForm";
import AdminLogin from "./components/admin/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import Dashboard from "./components/admin/Dashboard";
import UserList from "./components/admin/UserList";
import Users from "./components/admin/Users";
function App() {
  return (
    <div className="h-screen w-screen bg-black  ">
         <Router>
        <Suspense fallback={<h1>logding</h1>}>
          <Routes>
            <Route path="/" element={<UserForm/>} />
            <Route path="/admin" element={<AdminLogin/>} />
            <Route path="/Users" element={<UserList/>} />
            //UsersPost
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/UsersPost" element={<Users/>} />
            <Route path="*" element={<h1>not found</h1>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
