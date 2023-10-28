import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import "../../css/display.css";
import { OpenInFullRounded } from "@mui/icons-material";

function CellSelectionDialog({ plant }) {
  const [open, setOpen] = useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleCellClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="cell" onClick={handleCellClick}>
      {/* <Button
        variant="outlined"
        className="dialog-button"
        onClick={handleClickOpen}>
        {plant.common_name}
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {plant.common_name} ({plant.scientific_name})
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Colors:
            {plant.bloom_color.one || "none"},
            {plant.bloom_color.three || "none"},
            {plant.bloom_color.three || "none"}
            <br />
            Months:
            {/* {plantInfo.bloom_months.filter(month)} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCellClick}>Close</Button>
        </DialogActions>
      </Dialog>{" "}
    </div>
  );
}

export default CellSelectionDialog;
