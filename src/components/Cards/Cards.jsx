import React from 'react'
import Card from '../Card/Card'

export default function Cards() {
    return (
        <div className='grid grid-cols-2 gap-10 p-8'>
            <Card title='For Developers' subtitle="Browse your react jobs and start your career today" btn="browse Jobs" bg="bg-slate-300"></Card>
            <Card title='For Employers' subtitle="List your jobs to find the perfect developer for the role" btn="Add Jobs" bg="bg-blue-600"></Card>
        </div>
    )
}
