import React from 'react';
import Plot from 'react-plotly.js';
import './Overview.css';

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
      left
      </div>
      <div className='footer-right'>
      right
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


