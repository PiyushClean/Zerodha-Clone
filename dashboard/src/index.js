import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import axios from "axios";

function SecureDashboard() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/check-auth`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Auth Response:", res.data);
        if (res.data.authenticated) {
          setAuthenticated(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Auth Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Checking Authentication ...</div>;
  }

  if (!authenticated) {
    // window.location.href = "https://zerodha-clone-frontend-kappa.vercel.app/";
    // return null;
    return <div>Not authenticated</div>;
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