


import React from 'react'
import MinMatkasse from '../../../assets/imgs/1.PNG'
import Laga from '../../../assets/imgs/2.PNG'
import LoggaIn from '../../../assets/imgs/3.PNG'
import './navbar.css'; 
const NavBar = () => {
    return (
        <div className="header navbar-desktop">
        <div className="_navbar">
            <div className="navbar-logo">GASTROFY </div>
            <div className="navbar-menu">
                <ul className="display-flex">
                    <li className="text-dark"> Min meny  </li>
                    <li>&#8594; </li>
                    <li className="text-light">   Mina varor  </li>
                </ul>

            </div>
            <div className="navbar-icons">
                <ul className="display-flex p-0 m-0">
                    <li className="display-flex-column" >
                        <div> <img className="navbar-icon" src={MinMatkasse} alt="matkasse" /> </div>
                        <div>Min matkasse</div>
                    </li>
                    <li className="display-flex-column">
                        <div> <img className="navbar-icon" src={Laga} alt="Laga" /> </div>
                        <div>Laga</div>
                    </li>
                    <li className="display-flex-column">
                        <div> <img className="navbar-icon" F src={LoggaIn} alt="Logga" /> </div>
                        <div>Logga in </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        
    )
}
export default NavBar 
