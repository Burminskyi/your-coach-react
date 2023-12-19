import axios from "axios";
import React, { useEffect, useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import { ImageList, Pagination, Stack } from "@mui/material";

export const ExercisesCategoryPage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20arms",
      params: { limit: "10" },
      headers: {
        "X-RapidAPI-Key": "3e207ae0ebmsh6bb994f43ecf86dp186bc8jsna3f70ef80fee",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const fetchdata = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <ImageList sx={{ width: "100%" }} cols={4}>
        {exercises &&
          exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} data={exercise} />
          ))}
      </ImageList>
      <Stack direction="row" justifyContent="center" mt={2}>
        <Pagination count={10} color="primary"/>
      </Stack>
    </>
  );
};
