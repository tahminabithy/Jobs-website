import React from 'react'
import Hero from "../../components/Hero/Hero"
import Cards from "../../components/Cards/Cards"
import RecentJobs from '../../components/RecentJobs/RecentJobs'

function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <Cards />
            <RecentJobs />
        </div>
    )
}

export default Home