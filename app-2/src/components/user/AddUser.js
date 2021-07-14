import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function AddUser() {
    const history=useHistory();
    const [user,setUser]=useState({
        name:"",
        phone:"",
        address:"",
        adress:"",
        covidStatus:""
    });
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post('http://localhost:3003/users',user);
        history.push("/");
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2>Add User</h2>
                <form onSubmit={e=>{
                    onSubmit(e);
                }}>
                   <div class="form-group mb-2">
                        <input type="text" value={user.name} class="form-control" onChange={e=>{onInputChange(e)}}  name="name" placeholder="Enter name" />
                    </div>
                    <div class="form-group mb-2">
                        <input type="text" value={user.phone} class="form-control" onChange={e=>{onInputChange(e)}} name="phone" placeholder="Enter phone" />
                    </div>
                    <div class="form-group mb-2">
                        <input type="text" value={user.address} class="form-control" onChange={e=>{onInputChange(e)}}  name="address" placeholder="Enter address" />
                    </div>
                    <div class="form-group mb-2">
                        <input type="text" value={user.covidStatus} class="form-control" onChange={e=>{onInputChange(e)}}  name="covidStatus" placeholder="Negative or positive" />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>

        </div>
    )
}

export default AddUser
