import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../constants/sampledata";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";



const AppLayout = () => (WrappedComponent) => {
 
  return (props) => {
     
const params = useParams();
const chatId = params.chatId;
const handleDeletechat =  (e,_id,groupChat) => {
  e.preventDefault();
  
}  
    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              handleDeletechat={handleDeletechat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: { md: "2rem" },
              bgcolor: "rgba(160,246,200,0.5)",
            }}
          >
            <Profile/>
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
