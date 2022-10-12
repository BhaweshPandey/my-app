import React from 'react';
import './Ticket.css';
import { TicketRow } from '../../Components/Tickets/TicketUi';
import Sitebar from '../../Components/Sitebar/Sitebar';


const Ticket = () => {
  return (
    <div className='Ticket-page'>
      {/*<Tickets/>*/}
      <TicketRow/>
    </div>
  )
}

export default Ticket