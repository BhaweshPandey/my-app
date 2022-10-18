import React from 'react'
import { NavLink , } from 'react-router-dom';
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
                                <NavLink to='/'>
                                   Overview
                            <img src={Vector1} alt='' />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Ticket'>
                                    Ticket
                            <img src={Vector2} alt='' />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Ideas'>
                                    Ideas
                                    <img src={Vector3} alt='' />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Contacts'>
                                    Contacts
                                    <img src={Vector4} alt='' />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Agents'>
                                    Agents
                                    <img src={Vector5} alt='' />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Articles'>
                                    Articles
                                    <img src={Vector6} alt='' />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Settings'>
                                    Settings
                                    <img src={Vector7} alt='' />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Subscription'>
                                    Subscription
                                    <img src={Vector8} alt='' />
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}

export default Sitebar