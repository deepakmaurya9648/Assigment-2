import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams,Link} from 'react-router-dom';


function User() {
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        phone:"",
        address:"",
        adress:"",
        covidStatus:""
    });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result.data);
        setUser(result.data);
    }
    return (
        <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Address: {user.address}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">phone: {user.covidStatus}</li>
       
      </ul>
    </div>
    )
}

export default User
