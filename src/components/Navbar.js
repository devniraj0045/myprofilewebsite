import React from 'react'
import logo from "../logo.png"
//importing font Awsom.
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
  return (
   <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-10'>
          <div className='row ms-auto'>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     
     <a className="navbar-brand" href="Navbar"><img src={logo} alt="logo" className='logo'/></a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ms-auto">
         <li className="nav-item active">
           <a className="nav-link" href="Home">Home <span className="sr-only"></span></a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="Link">Services</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="Link">Contact US</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="Link">Projects</a>
         </li>
   
         
       </ul>
       
     </div>
   
   </nav>
            
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Navbar;
