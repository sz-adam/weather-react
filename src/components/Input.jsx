import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { fetchCityData } from "../redux/searchSlice";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Fab } from "@mui/material";

function Input() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    if (search) {
      dispatch(fetchCityData(search));
    }
  };
  
  // Enter gomb
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && search) {
      dispatch(fetchCityData(search));
    }
  };
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        autoComplete="off"
        label="City"
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px",
          },
          marginTop: "25px",
          width: {
            xs: "80%",
            sm: "80%",
            md: "500px",
          },
        }}
      />

      <Fab
        color="primary"
        size="medium"
        sx={{ marginTop: "25px", marginLeft: "10px" }}
      >
        <SearchIcon onClick={handleSearchClick} />
      </Fab>
    </Box>
  );
}

export default Input;
