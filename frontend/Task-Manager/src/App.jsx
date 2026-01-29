import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


import Login from './pages/Auth/Login';
import SingUp from './pages/Auth/SingUp';

import Dashboard from './pages/Admin/Dashboard';
import ManageTasks from './pages/Admin/ManageTask';
import CreateTasks from './pages/Admin/CreateTasks';
import ManageUsers from './pages/Admin/ManageUsers';

import UserDashboard from './pages/User/UserDashboard';
import MyTask from './pages/User/MyTask';
import ViewTaskDetails from './pages/User/ViewTaskDetails';

import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singUp" element={<SingUp />}></Route>

        {/* Admin Routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/tasks" element={<ManageTasks/>}/>
          <Route path="/admin/create-task" element={<CreateTasks/>}/>
          <Route path="/admin/users" element={<ManageUsers/>}/>
        </Route>

        {/* User Routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
          <Route path="/user/dashboard" element={<UserDashboard/>}/>
          <Route path="/user/my-task" element={<MyTask/>}/>
          <Route path="/user/task-details/:id" element={<ViewTaskDetails/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App