import { Box, Fab, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

import { Add as AddIcon } from "@mui/icons-material";
import { AddParamsModal } from "../components/AddParamsModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllParamsThunk } from "../redux/userParams/operations.js";
import { selectUserParams } from "../redux/userParams/selectors.js";
import { ParamsCard } from "../components/ParamsCard.js";

export const ProfilePage = () => {
  const userParams = useSelector(selectUserParams);

  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getAllParamsThunk());
  }, [dispatch]);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Box>
        {userParams.length > 0 && (
          <div style={{
            display:"flex",
            flexWrap:"wrap",
            gap:"30px"
          }}>
            {userParams.map((param) => (
              <ParamsCard params={param} />
            ))}
          </div>
        )}
      </Box>
      <AddParamsModal open={open} setOpen={setOpen} />
    </>
  );
};
