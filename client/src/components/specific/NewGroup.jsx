import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleUsers } from "../constants/sampledata";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";
const NewGroup = () => {

  const groupName = useInputValidation("");
  const [members, setMembers]= useState(sampleUsers);
  const [selectedMember, setSelectedMember]= useState([]);
    const selectMemberHandler = (id) => {
      setSelectedMember((prev)=>prev.includes(id)?prev.filter((i)=> i!==id):[...prev, id]);
    };
    const onSubmitHandler = () => {};
  // const isLoadingSendFriendRequest = true;
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>
        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              
              isAdded={selectedMember.includes(user._id)}
            />
          ))}
        </Stack >
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error">Cancel</Button>
          <Button variant="contained" size="large" onClick={onSubmitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
