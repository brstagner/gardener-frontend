import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

//** Component displaying visual cell */
function DisplayCell({ cell, month, leafed, plant, cellSize, showLabels }) {
  const nav = useNavigate();

  // Cell color reflects flower color if plant is in bloom
  const inBloom = plant ? plant.bloom_months[month] : null;

  // Cell color is green if not in bloom and not leafed, else brown
  const leafColor = leafed ? "green" : "#7f7053";

  // Plant info dialog logic
  const [open, setOpen] = useState(false);

  const handleCellClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <td
      className="square-cell"
      title={plant ? plant.common_name : null}
      key={`${cell.row}-${cell.column}`}
      data-row={cell.row}
      data-column={cell.column}
      onClick={handleCellClick}
      style={{
        aspectRatio: 1 / 1,
        width: `${cellSize}%`,
        height: `${cellSize}%`,
        border: "2px black solid",
        backgroundColor: inBloom ? `${plant.bloom_color.one}` : leafColor,
      }}>
      {showLabels ? (
        <div
          style={{
            backgroundColor: "white",
            color: "black",
          }}>
          {plant.common_name}
        </div>
      ) : null}
      {plant ? (
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
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </td>
  );
}

export default DisplayCell;
