import React from "react";
import TextField from "@mui/material/TextField";

function Input() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        autoComplete="off"
        label="City"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px",
          },
          marginTop: "25px",
          //Responsive
          width: {
            xs: "90%",
            sm: "80%",
            md: "500px",
          },
        }}
      />
    </div>
  );
}

export default Input;
