import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Createtracking from "./Createtracking";

const Nothavetracking = () => {
  let [opennew, setOpennew] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Createtracking open={opennew} setOpen={setOpennew}/>
      <Image
        src="/img/no_content.svg"
        alt="no content found image"
        width={250}
        height={250}
      />
      <Typography>You dont have any tracking yet , create one now</Typography>
      <Button onClick={()=>{
        setOpennew(true)
        
      
      }} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Create Tracking
      </Button>
    </div>
  );
};

export default Nothavetracking;
