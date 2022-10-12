import React from 'react'
import { NavLink , } from 'react-router-dom';
import './Sitebar.css';

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
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Ticket'>
                                    Ticket
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Ideas'>
                                    Ideas
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Contacts'>
                                    Contacts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Agents'>
                                    Agents
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Articles'>
                                    Articles
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Settings'>
                                    Settings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Subscription'>
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