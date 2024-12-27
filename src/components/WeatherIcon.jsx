import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";

function WeatherIcon({ combinateDay, fontSize, night }) {
  let icon;
  if (combinateDay.rain_sum > 0) {
    icon = (
      <ThunderstormIcon sx={{ color: "lightskyblue", fontSize: fontSize }} />
    );
  } else if (combinateDay.snowfall_sum > 0) {
    icon = <AcUnitIcon sx={{ color: "white", fontSize: fontSize }} />;
  } else {
    icon = night ? (
      <WbSunnyIcon sx={{ color: "orange", fontSize: fontSize }} />
    ) : (
      <NightlightIcon sx={{ color: "lightskyblue", fontSize: fontSize }} />
    );
  }
  return icon;
}

export default WeatherIcon;
