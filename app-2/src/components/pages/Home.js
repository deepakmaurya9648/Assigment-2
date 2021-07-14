import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3003/users');
        console.log(result.data);
        setUser(result.data.reverse());
    }
    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Patients List</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Covid Status</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>{user.covidStatus}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`users/${user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary" to={`users/edit/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Discharge</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default Home
