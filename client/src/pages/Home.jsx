import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box bgcolor={"rgba(0,0,0,0.1)"} height={"100%"} he>
      <Typography p="1rem" textAlign={"center"} variant="h5">
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
