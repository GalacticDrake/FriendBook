import React, { useState } from "react";

import { loginUser } from "../../hooks/useFetch";
import PrintErrorMessage from "../error/PrintErrorMessage";

import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    fontSize: "14px",
    fontFamily: '"Poppins", sans-serif',
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .Mui-focused": {
    borderBottomColor: theme.palette.primary.main,
  },
  "@media only screen and (min-width: 1024px)": {
    "& label": {
      fontSize: "16px",
    },
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#FFFFFF",
  textTransform: "none",
  fontFamily: '"Poppins", sans-serif',
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Login = ({ setToken }: any) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError && setError("");
    const token = await loginUser({ username, password });

    switch (token) {
      case 1:
        setError("This username does not exist.");
        break;
      case 2:
        setError("You have entered the wrong password.");
        break;
      default:
        setToken(token);
    }
  };

  return (
    <div className="loginSection">
      <div className="loginContainer">
        <div className="loginHeader">
          <div className="loginTitle h3Heading">Login</div>
          <div className="loginSubtitle body">
            Enter your details to continue.
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formInner">
            <div className="inputFields">
              <CustomTextField
                fullWidth
                InputLabelProps={{ required: false }}
                className="customTextField body"
                id="filled-basic"
                label="Username"
                variant="filled"
                onChange={(e: any) => setUserName(e.target.value)}
                required
              />
              <CustomTextField
                fullWidth
                InputLabelProps={{ required: false }}
                className="customTextField"
                id="filled-basic"
                label="Password"
                type="password"
                variant="filled"
                onChange={(e: any) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="submitContainer">
              {<PrintErrorMessage message={error} />}
              <div className="submitInner">
                <CustomButton variant="text" type="submit">
                  Login
                </CustomButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
