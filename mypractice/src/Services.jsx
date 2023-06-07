import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Services() {
  return (
    <div className=" border border-2 border-danger m-2 p-2 ">
        <h3>Services</h3>
        <ol>
            <li><Link to='/services/cons'>Consultation </Link></li>
            <li><Link to='/services/train'>Training </Link></li>
            <li><Link to='/services/mseo'>SEO and Digital Marketing </Link></li>
            <Outlet></Outlet>
        </ol>
    </div>
  )
}

export default Services