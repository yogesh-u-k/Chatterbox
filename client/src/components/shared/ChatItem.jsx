import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Stack, Typography } from "@mui/material";
import {Box} from "@mui/system"
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return (
    <Link sx={{padding:"0"}} to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e, _id,groupChat)}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          cursor: "pointer",
          backgroundColor: sameSender ? "rgba(0, 0, 0, 0.2)" : "unset",
          color: sameSender ? "black" : "unset",
          borderBottom: "1px solid #f0f0f0",
          justifyContent: "start",
          position: "relative",
        }}
      >
    {
      <AvatarCard avatar={avatar}/>
    }
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              bgcolor: "green",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
