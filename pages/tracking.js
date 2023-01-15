import { Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Searchtrackings from '../componeents/Tracking/Searchtrackings';
import TrackingComponenet from '../componeents/Tracking/TrackingComponenet';
import tracking from '../src/dummydata/listtrackings';

const Tracking = () => {
  let [trackings, setTrackings] = React.useState([]);
  useEffect(()=>{
    setTrackings(tracking)
  },[])
  return (
    <>
            <Searchtrackings settrackings={setTrackings}/>

    <div style={{
      width: '80%',
      height: '70%',
      marginTop: '30px',
      maxHeight: '80%',
      overflow: 'auto',


    }}>
      <Typography
          variant="h4"
          style={{
              marginTop: '10px',
              marginBottom: '10px',
              color: '#757573',
              // make sttck
              position: 'sticky',
              top: '0',
              zIndex: '1',
              backgroundColor: 'white',
             


          }}

       >
          Tracking 
      </Typography>
      <Divider
          style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'black',
              marginTop: '10px',
              marginBottom: '10px'
          }}
      />
       <TrackingComponenet tracking={trackings}/>
    </div>
    </>

  );
};

export default Tracking;