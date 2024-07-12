import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isCompleted, setIsCompleted] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4000/task/${id}`)
      .then(res => {
        const { title, description, is_completed } = res.data;
        setTitle(title);
        setDescription(description);
        setIsCompleted(is_completed);
      })
      .catch(err => console.log(err));
  }, [id]); 

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/update/`+id, { title, description, isCompleted })
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2 className='d-flex justify-content-center align-items-center'>Update Tasks</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Completed (Yes/No)</label>
            <div>
              <input
                type="text"
                className="form-control"
                id="isCompleted"
                value={isCompleted}
                onChange={(e) => setIsCompleted(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;
