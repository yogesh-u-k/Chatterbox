
import React, { Suspense } from 'react'
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { lazy } from 'react';
import ProtectRoutes from './components/auth/ProtectRoutes';
import LayoutLoader from './components/layout/Loaders';

const Home = lazy(()=>
import('./pages/Home'))


const Login = lazy(()=>
  import('./pages/Login'))


const Groups = lazy(()=>
  import('./pages/Groups'))

const Chat = lazy(()=>
  import('./pages/Chat'))

const NotFound = lazy(()=>
  import('./pages/NotFound'))
  
let user = true;



function App() {
  return (
    // <div>
    //   <RouterProvider router={router} />
    // </div>

    <BrowserRouter>

    <Suspense fallback={<LayoutLoader/>}>
    <Routes>
        <Route element={<ProtectRoutes user={user} />}>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
        </Route>

        <Route path="/login" element={ <ProtectRoutes user={!user} redirect="/" > <Login /> </ProtectRoutes>} />
        <Route path="*" element={<NotFound/>}/>   
      </Routes>
    </Suspense>
      
    </BrowserRouter>
  )
}

export default App
