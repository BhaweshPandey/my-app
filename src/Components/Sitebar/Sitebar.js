import React from 'react'
import { NavLink, } from 'react-router-dom';
import './Sitebar.css';
import Vector1 from '../../image/Vecto2r.png';
import Vector2 from '../../image/Vector3.png';
import Vector3 from '../../image/Vector4.png';
import Vector4 from '../../image/Vector5.png';
import Vector5 from '../../image/Vector6.png';
import Vector6 from '../../image/Vector7.png';
import Vector7 from '../../image/Vector8.png';
import Vector8 from '../../image/Vector9.png';


const Sitebar = () => {
    return (
        <div className='Sitebar'>
            <div className='Sitebar-heading'>
                <h3>Deshboard Kit</h3>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink className={"links"} to='/'>
                                <img src={Vector1}  alt='' />
                                <span>Overview</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"links"} to='/Ticket'>
                                <img src={Vector2} alt='' />
                                Ticket
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"links"} to='/Ideas'>
                                <img src={Vector3} alt='' />
                                Ideas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"links"} to='/Contacts'>
                                <img src={Vector4} alt='' />
                                Contacts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"links"} to='/Agents'>
                                <img src={Vector5} alt='' />
                                Agents
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"links"} to='/Articles'>
                                <img src={Vector6} alt='' />
                                Articles
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"links"} to='/Settings'>
                                <img src={Vector7} alt='' />
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"links"} to='/Subscription'>
                                <img src={Vector8} alt='' />
                                Subscription
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sitebar