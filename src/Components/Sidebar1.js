import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div >
      <div style={{ display: 'block', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            User Management 
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu >
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sign-in-alt">Login</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login/register" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user-plus">Sign Up</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">All Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/administrators" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">All Administrators</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            @2024-Priya Jaiswal
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
   
    </div>
  )
}


