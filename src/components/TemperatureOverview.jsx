import { Box, Typography } from "@mui/material";
import React from "react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import SunriseReceipt from "./SunriseReceipt";

function TemperatureOverview() {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "20px",
              sm: "30px",
              md: "40px",
            },
          }}
        >
          24 C
        </Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
            Feels like:{" "}
          </Typography>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
            22 C
          </Typography>
        </Box>
      </Box>
      <SunriseReceipt
        icon={WbTwilightIcon}
        value="15:55 AM"
        label="Sunrise"
        color="orange"
      />
      <SunriseReceipt
        icon={WbTwilightIcon}
        value="06:53 AM"
        label="Sunset"
        color="black"
      />
    </Box>
  );
}

export default TemperatureOverview;
