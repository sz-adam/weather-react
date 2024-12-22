import { Box, Typography } from "@mui/material";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function Sunny({ display }) {
  return (
    <Box
      sx={{
        display: display,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "10px",
        margin: "6px",       
        width: {
          xs: "90%",
          md: "0%",
        },
      }}
    >
      <WbSunnyIcon
        sx={{ color: "orange", fontSize: { xs: 60, sm: 80, md: 100 } }}
      />
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "16px",  md: "28px" },
          fontWeight: "bold",
        }}
      >
        Sunny
      </Typography>
    </Box>
  );
}

export default Sunny;
