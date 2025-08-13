import React from 'react';
import { Chrono } from 'react-chrono';

const Timeline = () => {
  const items = [
    {
      title: 'Lloyds Banking Group',
      cardTitle: 'LBG',
      cardDetailedText: 'fnhsebfjkdbgvkjdngkjdrn',

    },
        {
      title: 'Goldman Sachs',
      cardTitle: 'LBG',
      cardDetailedText: 'fnhsebfjkdbgvkjdngkjdrn',

    },

    {
        title: 'University of Bristol',


    }



    // ... more items
  ];

  return (
    <div style={{width: '50vw', height: '950px' }}>
        <
            Chrono items={items} 
            disableToolbar={true} 
            disableClickOnCircle={true}
        
        />
    </div>
  );
};

export default Timeline;