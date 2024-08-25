import React from 'react'
import logo from '../img/logo.png'
export default function ReHeader() {
  return (
    <>
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <img src= {logo}  alt="Food Lover Logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page"  href='/'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light"  href='#about' >About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page"  href='#Openning' >Time Open</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href='#gallery' >Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light"  href='#contact' >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
        <div className="overlay"></div> 
    
        <div className="container h-80 d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h1 className="text-light">Welcome To <span>Food Lover</span> Restaurant</h1>
                <p className="text-light">Here you can find the most delicate food in the world</p>
                <a href="#contact" className="btn btn-primary">Book a Table</a>
            </div>
        </div>
    </header>
    </>
  )
}
