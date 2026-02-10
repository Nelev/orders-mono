import { AppBar, Toolbar } from "@mui/material";
import React from "react";

import "./style.css";

interface IProps {
  children: React.ReactNode;
}

const DataTableToolbar: React.FC<IProps> = ({ children }) => {
  return (
    <AppBar position="static" component={"nav"} className="generic-appbar">
      <Toolbar color="secondary" disableGutters className="generic-toolbar">
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default DataTableToolbar;
