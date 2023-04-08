import React from 'react';

const PacketInspectionText = () => {
  return (
    <div>
      <style>
        {`
          .fancy-text {
            font-size: 40px;
            font-family: 'Helvetica Neue', sans-serif;
            color: white;
            letter-spacing: 1px;
            margin-bottom: 5px;
            margin-left: 670px;
          }
          .fancy-text-small {
            font-size: 20px;
            font-family: 'Helvetica Neue', sans-serif;
            color: white;
            letter-spacing: 1px;
            margin-bottom: 5px;
            margin-left:590px;
          }
        `}
      </style>
      <h1 className="fancy-text">Deep Packet Inspection:</h1>
      <h1 className="fancy-text-small">*Note that when strings are sent through the packets fields</h1>
      <h1 className="fancy-text-small">numbers are displayed 
      as they are converted with ascii values.</h1>
      
    </div>
  );
};

export default PacketInspectionText;