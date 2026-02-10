import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useStore from "../../store";
import { IState } from "../../model/state";

interface IProps {
  handleLoginClick?: () => void;
  handleContactClick?: () => void;
}

const Header: React.FC<IProps> = () => {
  /*   const handleOpenUserMenu = (_event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }; */

  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const setUser = useStore((state: IState) => state.setUser);
  const user = useStore((state: IState) => state.user);

  const handleLogout = () => {
    setUser(null);
    navigate("/home");
  };

  return (
    <Box flexGrow={1}>
      <AppBar component={"nav"} position="fixed">
        <Toolbar sx={{ justifyContent: { xs: "space-between" } }}>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ alignItems: "flex-start" }} edge="start" href="/">
              {/*img srcSet={} alt="" />*/}
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <Typography textAlign="center">Softcan</Typography>
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>
            {pathname !== "/login" ? (
              <IconButton edge="end" color="secondary">
                <Badge /* badgeContent={4} */ color="secondary">
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
            ) : null}
            <Box
              sx={{
                display: { xs: "none", md: "flex", marginLeft: "20px" },
                alignItems: "center",
              }}
            >
              {user ? user.name : null}
            </Box>

            <IconButton edge="end" color="secondary" onClick={handleLogout}>
              <Avatar sx={{ bgcolor: pink[700] }} />
            </IconButton>

            {/*  <UserMenu
              anchorEl={anchorElUser}
              setAnchorEl={setAnchorElUser}
              handleContact={handleContactClick}
              handleLogin={handleLoginClick}
              handleLogout={handleLogout}
            /> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
