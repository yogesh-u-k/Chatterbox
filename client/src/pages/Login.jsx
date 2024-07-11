
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { VisuallyHiddenInputs } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation, useStrongPassword} from '6pp'
import { userValidator } from '../utils/validator';


const Login = () => {
    const [isLogin, setIsLogin] =useState(true);
    const toogleLogin = ()=> setIsLogin((pre)=> !pre)
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("",userValidator);
    const password = useStrongPassword("");
    const avatar =  useFileHandler("single")

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log("login")
    }
    const handleSignUp = (e)=>{
        e.preventDefault();
        console.log("login")
    }
    const handleRegister = (e)=>{
        e.preventDefault();
        console.log("register")
    }
  return (
    <div style={{backgroundImage:"linear-gradient(rgba(160,246,200,0.5),rgba(220,110,220,0.5))"}}>
    <Container component={"main"}  maxWidth="xs" sx={{display:"flex", alignItems:"center", height:"115vh", justifyContent:"center"}}>
    <Paper elevation={3} sx={
       {
        padding:4,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
       }
    }
    >
{
    isLogin ? (<>
      <Typography variant='h5'>
        Login
    </Typography>
    <form style={{
        width:"100%" ,
        marginTop:"1rem"
    }} onSubmit={handleLogin}>
  

    <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value}onChange={username.changeHandler} />
    {
        username.error &&
        <Typography color="error" variant='caption'>{username.error
        }</Typography>
    }
    <TextField required fullWidth label="Password" type="password" margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler}/>
    <Button sx={{marginTop:'1rem'}} variant='contained' fullWidth color='primary' type="submit">Login</Button>
    <Typography textAlign={'center'}  m={'1rem'}>OR</Typography>
    <Button variant='text' fullWidth onClick={toogleLogin}>Sign Up Insted</Button>
    </form>
    </>): (<>
        <Typography variant='h5'>
        Sign Up
    </Typography>
    <form style={{
        width:"100%" ,
        marginTop:"1rem"
    }} onSubmit={handleSignUp} >
    
   
   <Stack position={'relative'} width={'10rem'} margin={"auto"}>
    <Avatar sx={{width:"10rem", height:"10rem", objectFit:"contain" }} src={avatar.preview} ></Avatar>

    <IconButton sx={{position:"absolute", bottom:0, right:0,color:"white",  backgroundColor:"rgba(0,0,0,0.5)", ":hover":{
      backgroundColor:"rgba(0,0,0,0.7)"   
    }}} component="label">
        <>
        <CameraAltIcon/>
        <VisuallyHiddenInputs type="file" onChange={avatar.changeHandler}/>
        </>
    </IconButton>
   </Stack>

   {
        avatar.error &&
        <Typography color="error" variant='caption' width={"fit-content"} display={"block"} m="1rem auto">{avatar.error
        }</Typography>
    }
    <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler}/>
    <TextField required fullWidth label="BIo" margin='normal' variant='outlined' value={bio.value} onChange={bio.changeHandler}/>
    <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler}/>
    {
        username.error &&
        <Typography color="error" variant='caption'>{username.error
        }</Typography>
    }
    <TextField required fullWidth label="Password" type="password" margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler}/>
    {
        password.error &&
        <Typography color="error" variant='caption'>{password.error
        }</Typography>
    }
    <Button sx={{marginTop:'1rem'}} variant='contained' fullWidth color='primary' type="submit" >Sign up</Button>
    <Typography textAlign={'center'}  m={'1rem'}>OR</Typography>
    <Button variant='text' fullWidth onClick={toogleLogin}>Log in Insted</Button>
    </form>
    </>)
}

    </Paper>
    </Container>
    </div>
  )
}

export default Login
