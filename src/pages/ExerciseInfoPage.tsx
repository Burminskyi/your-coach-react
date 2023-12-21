import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ExerciseInfoPage = () => {
  const [exerciseInfo, setExerciseInfo] = useState();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      headers: {
        "X-RapidAPI-Key": "3e207ae0ebmsh6bb994f43ecf86dp186bc8jsna3f70ef80fee",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const fetchdata = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setExerciseInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, [id]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
    {exerciseInfo && (
      <Card sx={{ display: "flex", maxWidth: 800 }}>
        <CardContent sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image={exerciseInfo.gifUrl}
                alt={exerciseInfo.name}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Typography variant="h4">{exerciseInfo.name}</Typography>
                <Typography variant="h6">Main muscles: {exerciseInfo.target}</Typography>
                <Typography variant="h6">Secondary muscles: {exerciseInfo.secondaryMuscles.join(", ")}</Typography>
                <Typography variant="h6">Equipment: {exerciseInfo.equipment}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <ul>
                {exerciseInfo.instructions.map((instruction, index) => (
                  <li key={index}>{index + 1}. {instruction}</li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )}
  </Box>
  );
};
