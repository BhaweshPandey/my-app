import React from 'react'
import { NavLink } from 'react-router-dom';
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
                                
                                    Contacts
                                
                            </li>
                            <li>
                                
                                    Agents
                                
                            </li>
                            <li>
                                
                                    Articles
                                
                            </li>
                            <li>
                                
                                    Settings
                                
                            </li>
                            <li>
                                
                                    Subsription
                                
                            </li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}

export default Sitebar