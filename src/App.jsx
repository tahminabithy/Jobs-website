import { useState } from 'react'
import './App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Layout from './Layout/Layout';
import BrowseJobs from './components/BrowseJobs/BrowseJobs';
import NotFound from './Pages/NotFound/NotFound';
import JobDetails from './components/JobDetails/JobDetails';
import AddJob from './Pages/AddJob/AddJob';
import EditJob from './components/EditJob/EditJob';
function App() {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // delete job
  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'DELETE',
    })
    return;

  }

  // edit job 
  const editJob = async (id) => {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path="/allJobs" element={<BrowseJobs />}></Route>
        <Route path="/addJob" element={<AddJob addJobSubmit={addJob} />}></Route>
        <Route path="/jobs/:id" element={<JobDetails deleteJob={deleteJob} />}></Route>
        <Route path='editJob/:id' element={<EditJob editJob={editJob} />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
