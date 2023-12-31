import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import Api from "../Api";
import PlantCard from "./PlantCard";
import "../css/nav.css";

function Plants({ currUser }) {
  const nav = useNavigate();

  const [plants, setPlants] = useState([]);

  async function getPlants() {
    try {
      let plantsRes = await Api.getUserPlants(currUser.token);
      setPlants(plantsRes);
    } catch (errors) {
      // console.log(errors.message);
    }
  }

  // Call getPlants on initial render (get logged-in user's plants)
  useEffect(() => {
    getPlants();
  }, []);

  /** Call Api.deletePlant for selected plant */
  const deletePlant = async (plant) => {
    try {
      await Api.deletePlant(plant.plant_id, plant.user_id, currUser.token);
      getPlants();
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Grid
        sx={{
          width: "fit-content",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            flexGrow: 1,
            mr: 2,
            margin: 4,
            fontFamily: "Caprasimo",
            color: "inherit",
            textDecoration: "none",
          }}>
          Your Plants
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {plants
            ? plants.map((plant) => (
                <PlantCard
                  key={plant.plant_id}
                  plant={plant}
                  deletePlant={deletePlant}
                />
              ))
            : null}
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Button onClick={() => nav("new")}>Add a new plant</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Plants;
