import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function Place() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          padding: 3.4,
          textAlign: "center",
          borderRadius: "10px",
          width: {
            xs: "90%",          
            md: "400px",
          },
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 2, color: "gray" }}
        >
          Kecskemét
        </Typography>

        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          16:49
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 1, color: "gray" }}>
          2024.12.22
        </Typography>
      </Paper>
    </Box>
  );
}

export default Place;
