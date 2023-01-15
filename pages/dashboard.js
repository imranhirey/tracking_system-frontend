import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AppListItems from "../componeents/reusable/Listitems";
import Nothavetracking from "../componeents/Tracking/Nothavetracking";
import Trackinglist from "../componeents/Tracking/Trackinglist";

const dashboard = () => {
  let trackings = true;
  return (<>
  {
          !trackings ? <Nothavetracking /> : <Trackinglist/>
       }
  </>
    
       
     
  );
};

export default dashboard;
