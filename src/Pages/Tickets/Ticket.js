import React from 'react';
import './Ticket.css';
import { TicketRow } from '../../Components/Tickets/TicketUi';


const Ticket = () => {
  return (
    <div className='Ticket-page'>
      <TicketRow/>
    </div>
  )
}

export default Ticket