import React, { useEffect, useState } from 'react'
import Job from '../Job/Job';
// import jobs from "../../../public/jobs.json"
import { Link } from 'react-router-dom';

function RecentJobs() {

    const [jobs, setJobs] = useState([]);
    const fewJobs = jobs?.slice(0, 3);

    useEffect(() => {
        fetch("http://localhost:8000/jobs").then(res => res.json().then(data => setJobs(data)))
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/jobs.json');
            const result = await response.json();
            setJobs(result.jobs);
            console.log(result.jobs);
        };

        fetchData();
    }, []);

    return (
        <div className='bg-blue-100 p-10'>

            <h1 className='text-sky-800 text-3xl font-bold pb-8'>Recent Jobs</h1>
            <div className='grid grid-cols-3 gap-6'>
                {/* {
                    jobs.map(job => {
                        return <Job key={job.id} job={job}></Job>
                    })
                } */}
                {
                    fewJobs?.map(job => (
                        <Job key={job.id} job={job}></Job>
                        // <div key={job.id} >
                        //     <h1>{job.title}</h1>
                        // </div>

                    ))
                }
            </div>
            <Link to="/allJobs"><button className='btn outline-btn my-8'>Browse All Jobs</button></Link>

        </div>
    )

}
export default RecentJobs
