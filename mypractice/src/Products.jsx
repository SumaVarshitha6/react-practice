import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Products() {
  return (
    <div className=" border border-2 border-danger m-2 p-2 ">
        <h3>Products</h3>
        <li><Link to="/mobile">Mobile</Link></li>
        <li><Link to="/laptop">Laptop</Link></li>
        <li><Link to="/ac">AC</Link></li>
        <Outlet></Outlet>
    </div>
  )
}

export default Products