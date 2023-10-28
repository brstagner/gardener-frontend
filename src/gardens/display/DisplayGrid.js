import DisplayCell from "./DisplayCell";
import "../../css/display.css";
import { auto } from "@popperjs/core";

//** Displays html table as visual representation of garden in a given month */
function DisplayGrid({
  grid,
  month,
  leafed,
  handleCellSelect,
  plants,
  showLabels,
}) {
  const numRows = grid.dimensions.height;
  const numCols = grid.dimensions.width;
  const rows = [];
  const cellSize = 100 / grid.dimensions.width;

  for (let y = 1; y <= numRows; y++) {
    const row = [];

    for (let x = 1; x <= numCols; x++) {
      const cell = grid.rows[y].cells[x];

      // Get appropriate plant information from user's plants with plant_id
      const plant = plants.find(({ plant_id }) => plant_id === cell.plant_id);

      row.push(
        <DisplayCell
          key={`${cell.row}-${cell.column}`}
          cell={cell}
          month={month}
          leafed={leafed}
          plant={plant}
          handleCellSelect={handleCellSelect}
          cellSize={cellSize}
          showLabels={showLabels}
        />
      );
    }

    rows.push(<tr key={y}>{row}</tr>);
  }
  return (
    <div className="table-container">
      <table
        style={{
          aspectRatio: numCols / numRows,
          overflow: auto,
          tableLayout: "fixed",
          cursor: "pointer",
          maxWidth: "50vw",
          maxHeight: "50vh",
          margin: "10px",
        }}
        width="100%"
        className="square-table">
        <tbody
          style={{
            overflow: auto,
          }}>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayGrid;
