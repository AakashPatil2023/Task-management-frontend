// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Task from './Task';
import CreateTask from './CreateTask';
import UpdateTask from './UpdateTask';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Task />} />
          <Route path='/create' element={<CreateTask />} />
          <Route path='/update/:id' element={<UpdateTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
