import "../style/App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import React from "react";
import ClientPage from "./ClientPage";
import AdminPage from "./AdminPage";
import EditDietPage from "./EditDietPage";
import EditClientPage from "./EditClientPage";
import EditSchedulePage from "./EditSchedulePage";
import EditWorkoutPage from "./EditWorkoutPage";
import Checkin from "./Checkin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path={"client/:id"} element={<ClientPage />} />
        <Route path={"client/:id/checkin"} element={<Checkin />} />

        <Route path={"admin/:id"} element={<AdminPage />} />
        <Route path={"user/:id"} element={<EditClientPage />} />
        <Route path={"user/diet/:id"} element={<EditDietPage />} />
        <Route path={"user/workout/:id"} element={<EditWorkoutPage />} />
        <Route path={"user/schedule/:id"} element={<EditSchedulePage />} />
      </Routes>
    </div>
  );
}

export default App;
