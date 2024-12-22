import { Box, Typography } from "@mui/material";
import React from "react";

function SunriseReceipt({ icon: Icon, value, label, color }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        marginBottom: "8px",
        textAlign: "center",
      }}
    >
      <Icon
        sx={{ fontSize: { xs: 30, sm: 40 }, color: color, marginRight: "10px" }}
      />
      <Box>
        <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
          {label}
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

export default SunriseReceipt;
