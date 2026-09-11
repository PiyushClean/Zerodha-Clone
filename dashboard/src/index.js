import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import axios from "axios";

function SecureDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/check-auth`, {
        withCredentials: true,
      })
      .then((res) => {
        if (!res.data.authenticated) {
          window.location.href = "http://localhost:5173";
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:5173";
      });
  }, []);

  if (loading) {
    return <div>Checking Authentication ...</div>;
  }

  return <Home />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SecureDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);