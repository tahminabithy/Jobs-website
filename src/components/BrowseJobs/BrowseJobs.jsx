import React, { useEffect, useState } from 'react'
import Job from '../Job/Job';

export default function BrowseJobs() {
    const [jobs, setJobs] = useState([]);
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
        <div className='p-10'>
            <h1 className='text-sky-800 text-3xl font-bold pb-8'>All Jobs</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    jobs?.map(job => (
                        <Job key={job.id} job={job}></Job>

                    ))
                }
            </div>
        </div>
    )
}
