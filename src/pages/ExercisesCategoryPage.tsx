import axios from "axios";
import React, { useEffect, useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import { ImageList, Pagination, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

export const ExercisesCategoryPage = () => {
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { name } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${name
        .split("-")
        .join(" ")}`,
      params: { limit: "10", offset: currentPage > 1 ? currentPage : "" },
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
  }, [name]);

  return (
    <>
      <ImageList sx={{ width: "100%" }} cols={4}>
        {exercises &&
          exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} data={exercise} />
          ))}
      </ImageList>
      <Stack direction="row" justifyContent="center" mt={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
};
