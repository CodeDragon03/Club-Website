import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const menuIconStyle = {
  color: "#8C38F7",
};

const menuItemStyle = {
  color: "#8C38F7",
  fontSize: "1.2rem",
  padding: "1rem 8rem 3rem 3rem",
  textTransform: "uppercase",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#8C38F7",
    textTransform: "uppercase",
    transform: "scale(1.3)",
  },
};

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon style={menuIconStyle} sx={{ fontSize: 40 }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/"
          sx={menuItemStyle}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/team"
          sx={menuItemStyle}
        >
          Teams
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/event"
          sx={menuItemStyle}
        >
          Events
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/contact"
          sx={menuItemStyle}
        >
          Contacts
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/newsletter"
          sx={menuItemStyle}
        >
          NewsLetter
        </MenuItem>
      </Menu>
    </div>
  );
}
