import React from "react";
import { Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Profile from "./pages/Profile";
import PlaceDetails from "./pages/PlaceDetails";
import Sidebar from "./Components/Sidebar";
import NavBar from "./Components/NavBar";
import SelectedPlace from "./pages/SelectedPlace";

const App = () => {
  return (
    <div className="bg-zinc-800 h-screen">
      <NavBar />
      <div className="flex">
        <Sidebar  />
        <div className="flex-3 border-l-2 border-zinc-500">
          <Routes>
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<PlaceDetails />} />
            <Route path="/selected/place" element={<SelectedPlace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
