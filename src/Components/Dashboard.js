import React, { useEffect } from "react";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [activeUsers, setActiveUsers] = useState(0);
    const [activeAdministrators,setActiveAdministrators]=useState(0);
  const fetchUsers = async () => {
    const data = await axios.get("http://localhost:65061/api/User/GetUsers");
    const activeUsers = data.data.length;
    setActiveUsers(activeUsers);
    // console.log(activeUsers);
  };

  const fetchAdministrators = async () => {
    const data1 = await axios.get("http://localhost:65061/api/Registration/GetAdministrators");
    const activeAdministrators = data1.data.length;
    setActiveAdministrators(activeAdministrators);
    // console.log(activeAdministrators);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    fetchAdministrators();
  }, []);

  return (
    <div>
      <Header1 />
      <div className="container">
        <div className="d-flex">
          <div className="col-6">
            <h3>All Active Users</h3>
            <p>{activeUsers}</p>
          </div>
          <div className="col-6" >
            <h3>All Administrators</h3>
            <p>{activeAdministrators}</p>
          </div>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}
