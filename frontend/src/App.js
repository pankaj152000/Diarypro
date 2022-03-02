import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import DiaryPage from "./pages/diarypage/diarypage";
import SavedPage from "./pages/saved/saved";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/diarypage" element={<DiaryPage/>}></Route>
      <Route path="/savedpage" element={<SavedPage/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
