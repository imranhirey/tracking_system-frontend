import { SendAndArchiveOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";
import tracking from "../../src/dummydata/listtrackings";

const Searchtrackings = ({
  settrackings
}) => {
  return (
    <div>
      <TextField
        // icon start

        style={{
          width: "50%",
          marginBottom: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
        id="outlined-search"
        label="Search Tracking by name"
        type="search"
        variant="standard"
        onChange={(e) => {
          console.log(e.target.value);
          settrackings(
            () =>{
              return tracking.filter((item) => {
                return item.name.toLowerCase().includes(e.target.value.toLowerCase());
              });
            }
          )
        }}
      />
    </div>
  );
};

export default Searchtrackings;
