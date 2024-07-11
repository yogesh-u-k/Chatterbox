import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDeletechat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, index) => {
        const {_id, avatar, name, groupChat, members} = data;
        const newMessageAlert = newMessagesAlert?.find(
          ({ chatId }) => chatId === _id
        );
        const isOnline = members?.some((members) => onlineUsers.includes(_id));
        return (
          <ChatItem
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            sameSender={chatId === _id}
            groupChat={groupChat}
            index={index}
            handleDeletechat={handleDeletechat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
