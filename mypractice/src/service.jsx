import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
    <div  className='border border-1 m-2 p-2'>
        <div>
            <h1>Our Services</h1>
          <Link to='/service/ang'><li>Single Page Web Application Development using Angular</li></Link>  
            <Link to='/service/react'><li>Single Page Web Application Development using React</li></Link>
            </div>
            <Outlet></Outlet>
    </div>
  )
}

export default Services