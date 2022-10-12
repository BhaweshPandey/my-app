import React from 'react'
import './Tickets.css'
import user1 from "../../image/user1.png";
import user2 from "../../image/w 3.jpg";
import user3 from "../../image/m 4.png";
import user4 from "../../image/m 5.png";
import user5 from "../../image/m 7.png";
import user6 from "../../image/w 5.png";
import user7 from "../../image/w 6.png";
import user8 from "../../image/w 7.png";

export const TicketRow = () => {

    const ticketData = [
        {
            userprofile: user1,
            query_heading: "Contact Email not Linked",
            query_desc: "Updated 1 day ago",
            customer_name: "Tom Cruise",
            query_date: "on 28.04.2019",
            ticket_date_title: "May 26, 2019",
            ticket_date_time: "6:30 pm",
            button_text: "High",
            button_css: {
                background: "#F12B2C"
            }
        },
        {
            userprofile: user2,
            query_heading: "Referral Bonus",
            query_desc: "Updated 2 day ago",
            customer_name: "Steve Rogers",
            query_date: "on 28.04.2019",
            ticket_date_title: "May 16, 2019",
            ticket_date_time: "6:30 pm",
            button_text: "Low",
            button_css: {
                background: "#FEC400"
            }
        },
        {
            userprofile: user3,
            query_heading: "How do I change my password?",
            query_desc: "Updated 3 day ago",
            customer_name: "Sam Smith",
            query_date: "on 28.04.2019",
            ticket_date_title: "May 06, 2019",
            ticket_date_time: "6:30 pm",
            button_text: "Normal",
            button_css: {
                background: "#29CC97"
            }
        },
        {
            userprofile: user4,
            query_heading: "Adding Images to Featured Posts",
            query_desc: "Updated 4 day ago",
            customer_name: "Matt Damon",
            query_date: "on 28.04.2019",
            ticket_date_title: "May 22, 2019",
            ticket_date_time: "6:30 pm",
            button_text: "Low",
            button_css: {
                background: "#FEC400"
            }
        },
        {
            userprofile: user5,
            query_heading: "When will I be charged this month?",
            query_desc: "Updated 5 day ago",
            customer_name: "Robert Downey",
            query_date: "on 28.04.2019",
            ticket_date_title: "May 21, 2019",
            ticket_date_time: "6:30 pm",
            button_text: "High",
            button_css: {
                background: "#F12B2C"
            }
        },
        {
            userprofile: user6,
            query_heading: "Payment not going through",
            query_desc: "Updated 6 day ago",
            customer_name: "Christian Bale",
            query_date: "on 28.04.2019",
            ticket_date_title: "May 24, 2019",
            ticket_date_time: "6:30 pm",
            button_text: "Normal",
            button_css: {
                background: "#29CC97"
            }
        },
        {
            userprofile: user7,
            query_heading: "Unable to add replies",
            query_desc: "Updated 7 day ago",
            customer_name: "Henry cavil",
            query_date: "on 28.04.2019",
            ticket_date_title: "May 29, 2019",
            ticket_date_time: "6:30 pm",
            button_text: "High",
            button_css: {
                background: "#F12B2C"
            }
        },
        {
            userprofile: user8,
            query_heading: "Downtime since last week",
            query_desc: "Updated 8 day ago",
            customer_name: "Chris Evans",
            query_date: "on 28.04.2019",
            ticket_date_title: "May 22, 2019",
            ticket_date_time: "6:30 pm",
            button_text: "Low",
            button_css: {
                background: "#FEC400"
            }
        },
    ]

    return (
        <div className='ticket-box'>
            <div className="header-class">
                <div className="title">
                    All Tickets
                </div>
                <div className="filter">
                    <p>sort</p>
                    <p>filter</p>
                </div>
            </div>
            <div className="table-heading">
                <div className="query-header">
                    Ticket details
                </div>
                <div className="customer">
                    Customer name
                </div>
                <div className="date">
                    Date
                </div>
                <div className="priority">
                    Priority
                </div>
                <div></div>
            </div>
            {
                ticketData.map((item, setitem) => (
                    <div className='ticket-table'>
                        <div
                            className="query-container">
                            <img src={item.userprofile} alt="user-profile" />
                            <div className="user-query">
                                <p className="query-heading">
                                    {item.query_heading}
                                </p>
                                <p className="query-desc">
                                    {item.query_desc}
                                </p>
                            </div>
                        </div>
                        <div className="costomer-class">
                            <p className="customer-name">
                                {item.customer_name}
                            </p>
                            <p className="query-date">
                                {item.query_date}
                            </p>
                        </div>
                        <div className="ticket-date">
                            <p className="ticket-date-title">
                                {item.ticket_date_title}
                            </p>
                            <p className="ticket-date-time">
                                {item.ticket_date_time}
                            </p>
                        </div>
                        <div className="urgency">
                            <button className="button-class" style={item.button_css}>
                                {item.button_text}
                            </button>
                        </div>
                        <div className='m-n'>
                            ⋮
                        </div>
                    </div>
                ))
            }
        </div>
    )

}
