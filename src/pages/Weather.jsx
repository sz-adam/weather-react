import React from "react";
import Input from "../components/Input";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Place from "../components/Place";
import DailyWeather from "../components/DailyWeather";
import { Box } from "@mui/material";

import Sunny from "../components/Sunny";
import Daysforecast from "../components/Daysforecast";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function Weather() {
  return (
    <Box
      style={{
        backgroundColor: "rgb(128, 128, 128)",
        height: "100vh",
        width: "100%",
      }}
    >
      <Input />
      <div>
        <Box sx={{ flexGrow: 1, marginTop: "56px" }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Place />
            </Grid>
            <Grid
              size={{ xs: 12, md: 8 }}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "none",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/**Box 2 sm megjelenítés */}
              <Sunny display={{ xs: "flex", md: "none" }} />
              <DailyWeather />
            </Grid>
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: "flex",              
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Daysforecast />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Item>xs=12 md=8</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
}

export default Weather;
