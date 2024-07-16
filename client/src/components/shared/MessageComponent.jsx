import { Box, Typography } from '@mui/material';
import React, { memo } from 'react'
import { lightBlue } from '../constants/color';
import moment from 'moment';

const MessageComponent = ({message, user}) => {
    const {sender, content, attachmenmt=[],createdAt} = message;
    const sameSender = sender?._id === user?._id;
    const timeago = moment(createdAt).fromNow();
  return (
    <div
    style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",backgroundColor:"white",
        color:"black",
        borderRadius:"5px",
        padding:"0.5rem",
        width:"fit-content",
    }}>
      {
        !sameSender && <Typography color={lightBlue} fontWeight={"600"} variant='caption'>{sender?.name}</Typography>
      }
      {
        content && <Typography>{content}</Typography>
      }
    {
        attachmenmt.length > 0 && attachmenmt.map((i, index)=>{
            {
                const url = i.url
                const file = "fggfx"

                return<Box>
                    <a href='' target="_blank" download style={{color:"black"}}>
                        
                    </a>
                </Box>

            }
        
    })
}
      <Typography variant="caption" color="text.secondary">{timeago}</Typography>
    </div>
  )
}

export default memo(MessageComponent) 
