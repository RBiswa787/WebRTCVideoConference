import React from "react";
import styled from "styled-components";
import RoomLogin from "./Components/roomLogin";
import VideoPage from "./Components/videoPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <AppMainDiv>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<RoomLogin/>}></Route>
      <Route path="/Video" element={<VideoPage />} />
    </Routes>
  </BrowserRouter>
    </AppMainDiv>
  );
}
export default App;

const AppMainDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`