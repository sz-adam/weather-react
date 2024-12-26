import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function WeatherIcon({ combinateDay, fontSize }) {
  let icon;
  if (combinateDay.rain_sum > 0) {
    icon = (
      <ThunderstormIcon sx={{ color: "lightskyblue", fontSize: fontSize }} />
    );
  } else if (combinateDay.snowfall_sum > 0) {
    icon = <AcUnitIcon sx={{ color: "white", fontSize: fontSize }} />;
  } else {
    icon = <WbSunnyIcon sx={{ color: "orange", fontSize: fontSize }} />;
  }
  return icon;
}

export default WeatherIcon;
