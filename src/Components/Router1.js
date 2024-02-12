import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Sidebar from './Sidebar1';
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import Users from "./Users";
import Administrators from "./Administrators";
import AddUser from "./AddUser";

export default function Router1() {
  return (
    <div  className="text-center" >
     <BrowserRouter>
    
     <div style={{display:'flex',float:"left",height:"100vh"}}>
        <Sidebar/>
      </div>
      <div >
        <Routes>

            <Route path="/"element={<Layout/> } >
            <Route path="/users" element={<Users/>} />
            <Route path="/administrators" element={<Administrators/>} />
            <Route path="/user/create" element={<AddUser/>}/>

            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/login/register" element={<Register/>} />
           
          
        </Routes>
        </div>
        </BrowserRouter>
      
    </div>
  );
}
