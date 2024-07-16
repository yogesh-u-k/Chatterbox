import React, { Fragment, useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { green, greyColor } from "../components/constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../components/constants/sampledata";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "kjdhj",
  name: "Yogesh",

}
const Chat = () => {
  const containRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={greyColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >

        {
          sampleMessage.map((i)=>(
            <MessageComponent message= {i} user={user}/>
          ))
        }
      </Stack>

      <form stayle={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton sx={{ position:"absolute" ,left:"1.5rem",rotate:"30deg"}} >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type Message Here..." />

          <IconButton
            type="submit"
            sx={{
              backgroundColor: "rgba(160,246,200,3)",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: green,
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu/>
    </Fragment>
  );
};

export default AppLayout()(Chat);
