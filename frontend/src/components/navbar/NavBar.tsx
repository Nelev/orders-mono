import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import SellIcon from "@mui/icons-material/Sell";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import "./style.css";
import { Divider } from "@mui/material";
import { ROLES } from "../../model/roles";
import { IState } from "../../model/state";
import useStore from "../../store";

const pagesObj = [
  {
    label: "Home",
    icon: <HomeIcon />,
    id: "home",
    roles: [ROLES.ASSOCIATION_ROLE, ROLES.USER_ROLE],
  },
  {
    label: "Orders",
    icon: <TaskAltIcon />,
    id: "orders",
    roles: [ROLES.ASSOCIATION_ROLE],
  },
  {
    label: "Your orders",
    icon: <TaskAltIcon />,
    id: "orders",
    roles: [ROLES.USER_ROLE],
  },
  {
    label: "Users",
    icon: <AccountCircleIcon />,
    id: "users",
    roles: [ROLES.ASSOCIATION_ROLE],
  },
  {
    label: "Inventory",
    icon: <SellIcon />,
    id: "inventory",
    roles: [ROLES.ASSOCIATION_ROLE],
  },
  {
    label: "History",
    icon: <FormatListNumberedIcon />,
    roles: [ROLES.ASSOCIATION_ROLE, ROLES.USER_ROLE],
    id: "history",
  },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const user = useStore((state: IState) => state.user);

  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState<string>(
    `${location.pathname ? location.pathname.replace("/", "home") : "home"}`,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavBarMobileButtonClick = (page: string) => {
    setAnchorElNav(null);
    navigate(page);
  };

  const handleNavBarButtonClick = (page: string) => {
    setAnchorElNav(null);
    setSelectedTab(page);
    navigate(page);
  };

  return (
    <>
      <Box
        sx={{ display: { xs: "flex", md: "none", justifyContent: "center" } }}
      >
        <AppBar
          position="fixed"
          component={"nav"}
          className="navbar-menu-appbar"
        >
          <Toolbar>
            <IconButton
              size="large"
              aria-label="navbar-icon"
              aria-controls="menu-navbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className="navbar-icon-button"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              classes={{ paper: "navbar-menu" }}
              id="menu-navbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pagesObj.map((page, index) => {
                return user && page.roles.includes(user.role) ? (
                  <div key={page.id}>
                    <MenuItem
                      onClick={() => handleNavBarMobileButtonClick(page.id)}
                      className="navbar-menu-item"
                    >
                      {page.label}
                    </MenuItem>
                    {index < pagesObj?.length - 1 ? (
                      <Divider className="navbar-menu-divider" />
                    ) : null}
                  </div>
                ) : null;
              })}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Box flexGrow={1}>
        <AppBar position="static" className="nav-bar">
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pagesObj.map((page) => {
                return user && page.roles.includes(user.role) ? (
                  <Box key={page.label}>
                    <Button
                      startIcon={page.icon}
                      onClick={() => {
                        handleNavBarButtonClick(page.id);
                      }}
                      sx={{
                        my: 2,
                        borderRadius: 0,
                        borderBottom:
                          page.id === selectedTab
                            ? "2px solid #002b45"
                            : "white",
                        backgroundColor: "white",
                        color: "#002b45",
                        padding: "10px 20px 10px 20px",
                        height: "30px",
                        margin: "0 10px 0 0",
                      }}
                    >
                      <Typography textTransform="none" noWrap>
                        {page.label}
                      </Typography>
                    </Button>
                  </Box>
                ) : null;
              })}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default NavBar;
