import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Allow } from "./pages/allow";
import { Home } from "./pages/home";
import useLocation from "./hooks/useLocation";
import useWeather from "./hooks/useWeather";

export default function App() {
  const navigate = useNavigate();
  const { locationAccess } = useLocation();
  const { getWeather, getFiveDays } = useWeather()

  useEffect(() => {
    if (locationAccess === false) {
      navigate('/access');
    }
  }, [locationAccess]);

  useEffect(() => {
    if (locationAccess === true) {
      getWeather()
      getFiveDays()
    }
  }, [locationAccess])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<Allow />} />
      </Routes>
    </>
  );
};
