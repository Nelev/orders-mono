import React from "react";
import { Box } from "@mui/system";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import "./style.css";
import { Link } from "react-router-dom";

interface IProps {
  handleLoginClick?: () => void;
  handleContactClick?: () => void;
}

const Footer: React.FC<IProps> = ({ handleContactClick, handleLoginClick }) => {
  return (
    <>
      <footer>
        <AppBar position="static" className="footer-app-bar">
          <Toolbar>
            <Box flexGrow={1}>
              <Button sx={{ flexGrow: 0 }} onClick={handleContactClick}>
                <Typography
                  textTransform={"none"}
                  fontWeight={"bold"}
                  fontSize={14}
                >
                  Contact us
                </Typography>
              </Button>
              <Button sx={{ flexGrow: 0 }} onClick={handleLoginClick}>
                <Typography
                  textTransform={"none"}
                  fontWeight={"bold"}
                  fontSize={14}
                >
                  Login
                </Typography>
              </Button>
              <Button sx={{ flexGrow: 0 }}>
                <Typography
                  textTransform={"none"}
                  fontWeight={"bold"}
                  fontSize={14}
                >
                  Status
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <Link to="https://www.https://github.com/Nelev/orders-mono/" target="/blank">
                <Typography
                  textAlign="center"
                  fontWeight={"bold"}
                  fontSize={14}
                  color="#32CD32"
                >
                  ® masm
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </footer>
    </>
  );
};

export default Footer;
