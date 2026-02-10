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
              <Link to="https://www.dhigroup.com/" target="/blank">
                <Typography
                  textAlign="center"
                  fontWeight={"bold"}
                  fontSize={14}
                  color="#32CD32"
                >
                  ® SoftCan
                </Typography>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              {/* <Button sx={{ flexGrow: 0 }}>
              <Link
                to="https://www.dhigroup.com/legal-and-compliance/disclaimer"
                target="/blank"
              >
                <Typography
                  textTransform={"none"}
                  fontWeight={"bold"}
                  fontSize={14}
                >
                  Disclaimer
                </Typography>
              </Link>
            </Button>
            <Button sx={{ flexGrow: 0 }}>
              <Link
                to="https://www.dhigroup.com/legal-and-compliance/terms-of-use"
                target="/blank"
              >
                <Typography
                  textTransform={"none"}
                  fontWeight={"bold"}
                  fontSize={14}
                >
                  Terms of use
                </Typography>
              </Link>
            </Button>
            <Button sx={{ flexGrow: 0 }}>
              <Link
                to="https://www.dhigroup.com/legal-and-compliance/privacy-policy"
                target="/blank"
              >
                <Typography
                  textTransform={"none"}
                  fontWeight={"bold"}
                  fontSize={14}
                >
                  Privacy
                </Typography>
              </Link>
            </Button>*/}
            </Box>
          </Toolbar>
        </AppBar>
      </footer>
    </>
  );
};

export default Footer;
