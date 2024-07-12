import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Task() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/')
            .then(res => setTasks(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:4000/delete/'+id);
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-75 bg-white rounded p-3">
                <Link to='/create' className='btn btn-success'>Add</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Completed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.is_completed}</td>
                                <td >
                                <Link to={`update/${task.id}`} className='btn btn-primary'>Update</Link>
                                <button className='btn btn-danger' onClick={ e => handleDelete(task.id)}>Delete</button>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Task;
