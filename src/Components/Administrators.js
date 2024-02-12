import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import '../App.css'
import { Link, useNavigate } from "react-router-dom";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
 
 
const Users = () => {

  const [currentPage,setcurrentPage]=useState(1);
  const [userData, setUserData] = useState(null);
  const recordsPerPage = 4;
  const lastIndex= currentPage*recordsPerPage;
  const firstIndex= lastIndex-recordsPerPage;
      const navigate = useNavigate();
 
 
      const prePage = () => {
        if (currentPage > 1) {
            setcurrentPage(currentPage - 1);
        }
    };
 
    const changeCPage = (e) => {
        setcurrentPage(Number(e.target.textContent));
    };
 
    const nextPage = () => {
        if (currentPage < Math.ceil(userData.length / recordsPerPage)) {
            setcurrentPage(currentPage + 1);
        }
    };
   
   
 
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:65061/api/Registration/GetAdministrators');
        const data = await response.json();
        setUserData(data);
         
       
      }
       fetchData();
       console.log(userData);
    }, []);
  
  return (
    <>
    <div>
        <Header1/>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2 className="text-center">Administrators</h2>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead className="bg-dark text-white">
                <tr>
                 
                  <td>Name</td>
                  <td>Date Of Birth</td>
                  <td>Email</td>
                  <td>Mobile Number</td>
                
                </tr>
              </thead>
              <tbody>
                   {
                  userData &&
                  userData.slice(firstIndex, lastIndex).map(user => (
                      <tr key={user.userId}>
                        <td>{user.name}</td>
                        <td>{user.dob}</td>
                        <td>{user.email}</td>
                        <td>{user.mobileNumber}</td>
                         
       
                      </tr>
                    ))
                   }
 
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
            <nav>
            <ul className='pagination'>
                            <li className='page-item'>
                                <a href="#" className='page-link' onClick={prePage}> Prev</a>
                            </li>
                            {userData && Array.from({ length: Math.ceil(userData.length / recordsPerPage) }).map((_, i) => (
                                <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                                    <a href="#" className='page-link' onClick={changeCPage}>{i + 1}</a>
                                </li>
                            ))}
                             <li className='page-item'>
                                <a href="#" className='page-link' onClick={nextPage}> Next</a>
                            </li>
                        </ul>
             
            </nav>
            </div>
            <Link to="/" className="btn btn-primary">Back</Link>
          </div>
        </div>
      </div>
      <Footer1/>
      </div>
    </>
  );
};
 
export default Users;