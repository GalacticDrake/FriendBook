import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import useToken from "./hooks/useToken";
import FriendContainer from "./components/dashboard/FriendContainer";
import Navbar from "./components/ui/Navbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./main.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00CD9C",
    },
    secondary: {
      main: "#D9E8E3",
    },
  },
});

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Navbar />
          <Login setToken={setToken} />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Navbar setToken={setToken} token={token} />
          <Routes>
            <Route path="/friends" element={<FriendContainer />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
