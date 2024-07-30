import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "../components/Navbar/Navbar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <ToastContainer />
        </div>
    )
}




// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar'
// import Footer from '../components/Footer/Footer'
// export default function Layout() {
//     return (
//         <>
//             <Navbar />
//             <Outlet />
//             <Footer />
//         </>
//     )
// }
