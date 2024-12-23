import { Box, Typography } from "@mui/material";
import React from "react";

import CloudIcon from "@mui/icons-material/Cloud";

function Daysforecast() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        margin: "6px",
        width: {
          xs: "90%",
          md: "400px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "28px" },
          fontWeight: "bold",
        }}
      >
        7 Days forecast
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "10px",
          marginBottom:"5px"
        }}
      >
        <CloudIcon />
        <Typography>20 C</Typography>
        <Typography>Friday, 23 Dec</Typography>
      </Box>
      {/**Map függvény után törölni  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "5px",
        }}
      >
        <CloudIcon />
        <Typography>20 C</Typography>
        <Typography>Friday, 23 Dec</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "5px",
        }}
      >
        <CloudIcon />
        <Typography>20 C</Typography>
        <Typography>Friday, 23 Dec</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "5px",
        }}
      >
        <CloudIcon />
        <Typography>20 C</Typography>
        <Typography>Friday, 23 Dec</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "5px",
        }}
      >
        <CloudIcon />
        <Typography>20 C</Typography>
        <Typography>Friday, 23 Dec</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "5px",
        }}
      >
        <CloudIcon />
        <Typography>20 C</Typography>
        <Typography>Friday, 23 Dec</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "5px",
        }}
      >
        <CloudIcon />
        <Typography>20 C</Typography>
        <Typography>Friday, 23 Dec</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "5px",
        }}
      >
        <CloudIcon />
        <Typography>20 C</Typography>
        <Typography>Friday, 23 Dec</Typography>
      </Box>
    </Box>
  );
}

export default Daysforecast;
