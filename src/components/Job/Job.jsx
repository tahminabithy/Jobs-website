import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Job(job) {


    const [details, setDeatils] = useState(false);
    var description = job.job.description
    if (!details) {
        description = description.substring(0, 100)
    }
    return (
        <div className='shadow-xl bg-white p-8 text-start text-black rounded-lg'>
            <p className='text-sm text-gray-500 font-regular'>{job.job.type}</p>
            <h1 className='pt-2 pb-6 text-1xl font-bold '>{job.job.title} </h1>
            <p className='text-sm'>{description} ....</p>
            <button onClick={() => setDeatils((prevState) => !prevState)} className='text-sky-600 hover:text-gray-500'>
                {
                    details ? 'less' : 'more'
                }
            </button>

            <p className='py-4 text-sm text-sky-500'></p>
            <p className='pb-4 text-sky-600 text-sm'>{job.job.salary} / Year</p>
            <hr />
            <div className='flex justify-between pt-4 '>
                <div className='flex justify-center items-center text-red-500'><FontAwesomeIcon className='inline mr-2' icon={faMapMarker} /><p >{job.job.location}</p>
                </div>
                <Link to={`/jobs/${job.job.id}`}> <button className='btn btn-outline'>Read More</button></Link>

            </div>

        </div>
    )
}

export default Job
