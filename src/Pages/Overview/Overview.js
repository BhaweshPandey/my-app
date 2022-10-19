import React from 'react';
import Plot from 'react-plotly.js';
import './Overview.css';
import plus from '../../image/inactive.png';

const Overview = () => {
  return (
    <div className='overview-page'>
      <div className='top'>
        <div className='top-box'>
          <p>Unresolved</p>
          <h2>60</h2>
        </div>
        <div className='top-box'>
          <p>Overdue</p>
          <h2>16</h2>
        </div>
        <div className='top-box'>
          <p>Open</p>
          <h2>43</h2>
        </div>
        <div className='top-box'>
          <p>On hold</p>
          <h2>62</h2>
        </div>
      </div>
      <div className='mid-b'>
        <div className='mid-b-box'>
          mid
        </div>
      </div>
      <div className='footer'> 
        <div className='footer-left'>
          <div className='f-top'>
            <div><h3>Unresolved Tickets</h3>
            <p>Group:support</p></div>
            <div><a>View details</a></div>
          </div>
          <div className='f-mid'>
            <div className='f-l-mid-w'>
              <h4>Waiting on Feature Request</h4>
              <p>4238</p>
            </div>
            <hr/>
            <div className='f-l-mid-w'>
              <h4>Awaiting Customer Respose</h4>
              <p>1005</p>
            </div>
            <hr/>
            <div className='f-l-mid-w'>
            <h4>Awaiting developer Fix</h4>
            <p>914</p>
            </div>
            <hr/>
            <div className='f-l-mid-w'>
              <h4>Pending</h4>
              <p>281</p>
            </div>
          </div>
        </div>
        <div className='footer-right'>
        <div className='f-top'>
            <div><h3>Tasts</h3>
            <p>Today</p></div>
            <div><a>View all</a></div>
        </div>
            <div className='f-mid'>
            <div className='f-l-mid-w'>
              <p>Create New Tasts</p>
              <img src={plus} alt=''/>
            </div>
            </div>
        </div>
      </div>
      {/*<Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'pointcloud',
            mode: 'text+lines+markers',
            marker: {color: 'red'},
          },
          {type: 'pointcloud', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />*/}
    </div>
  )
}

export default Overview;


