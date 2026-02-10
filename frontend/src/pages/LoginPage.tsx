import React from "react";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import useStore from "../store";
import { IState } from "../model/state";
import { IUser } from "../model/user";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [role, setRole] = React.useState<string>("");
  const setUser = useStore((state: IState) => state.setUser);
  const navigate = useNavigate();

  const handleEnter = () => {
    const currentUser: IUser = {
      authenticated: true,
      name: userName,
      role: role,
      email: "test@mail.com",
    };
    setUser(currentUser);
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <TextField
        variant="outlined"
        sx={{ width: "200px", marginTop: "100px", backgroundColor: "white" }}
        label="User name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(event.target.value);
        }}
      />
      <TextField
        select
        value={role}
        variant="outlined"
        label="Select a role"
        sx={{ width: "200px", marginTop: "10px", backgroundColor: "white" }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setRole(event.target.value);
        }}
      >
        <MenuItem value="user">Private</MenuItem>
        <MenuItem value="association">Association</MenuItem>
      </TextField>
      <Button
        sx={{ width: "200px", marginTop: "30px" }}
        variant="contained"
        onClick={handleEnter}
        disabled={!userName || !role}
      >
        Enter
      </Button>
    </Box>
  );
};

export default LoginPage;
