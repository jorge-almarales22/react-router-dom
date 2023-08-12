import { useState } from "react";
import { Admin } from "./components/Admin";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Modules } from "./components/Modules";
import { Navbar } from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import { useLoginLogic } from "./hooks/useLoginLogic";
import { Page404 } from "./components/Page404";

export const App = () => {  
  const {user, setUser, logout, handleLogin} = useLoginLogic()

  return (
    <div className="container">
      <Navbar logout={logout}/>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} isAllowed={!!user} redirect="/home" handleLogin={handleLogin}/>}></Route>
        <Route path="/home" element={<Home user={user} isAllowed={!!user} redirect="/login"/>}></Route>
        <Route path="/modules" element={<Modules isAllowed={!!user} redirect="/login"/>}></Route>
        <Route path="/admin" element={<Admin isAllowed={!!user && user.permissions.includes("admin")} redirect="/home"/>}></Route>
        <Route path="/*" element={<Page404/>}></Route>

      </Routes>
    </div>
  )
}
