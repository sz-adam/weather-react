import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Error() {
  const { error } = useSelector((state) => state.search);
  const [open, setOpen] = useState(error);
  //TODO:Errorokat kezelni

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert severity="error" sx={{ width: "100%" }} onClose={handleClose}>
        {error}
      </Alert>
    </Snackbar>
  );
}

export default Error;
