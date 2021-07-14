import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

function EditUser() {
    const history=useHistory();
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        phone:"",
        address:"",
        adress:"",
        covidStatus:""
    });
    useEffect(()=>{
        loadUser();
    },[]);
    const {name,phone,address,covidStatus}=user;
    const onInputChange=e=>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/");
    }

    
    const loadUser=async() =>{
        const result=await axios.get(`http://localhost:3003/users/${id}`);
       setUser(result.data);
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2>Edit User</h2>
                <form onSubmit={e=>{
                    onSubmit(e);
                }}>
                    <div class="form-group mb-2">
                        <input type="text" value={name} class="form-control" onChange={e=>{onInputChange(e)}}  name="name" placeholder="Enter name" />
                    </div>
                    <div class="form-group mb-2">
                        <input type="text" value={phone} class="form-control" onChange={e=>{onInputChange(e)}} name="phone" placeholder="Enter phone" />
                    </div>
                    <div class="form-group mb-2">
                        <input type="text" value={address} class="form-control" onChange={e=>{onInputChange(e)}}  name="address" placeholder="Enter address" />
                    </div>
                    <div class="form-group mb-2">
                        <input type="text" value={covidStatus} class="form-control" onChange={e=>{onInputChange(e)}}  name="covidStatus" placeholder="Negative or positive" />
                    </div>
                
                    <button className="btn btn-primary btn-block">Edit</button>
                </form>
            </div>

        </div>
    )
}

export default EditUser
