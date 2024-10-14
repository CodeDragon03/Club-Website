import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Logo from "../assets/Logo.png";
import ListItemButton from "@mui/material/ListItemButton";

const logoStyle = {
  width: "60%",
  marginBottom: "3.6rem",
};

const logoBoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const copyRightStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.8rem",
  padding: "3.6rem 0 0 0",
};

const menuTitleStyle = {
  fontSize: "2.4rem",
  marginBottom: "2.4rem",
};

const listItemStyle = {
  fontSize: "1.8rem",
  color: "#fff",
};

const footer = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "1.8rem 0", overflowY: "hidden" }}>
        <Grid container spacing={3}>
          <Grid style={logoBoxStyle} textAlign={"center"} size="grow">
            <div>
              <img style={logoStyle} src={Logo} alt="logo" />
            </div>
            <div>
              <h3>Cyber Warriors Club</h3>
            </div>
          </Grid>
          <Grid textAlign={"center"} size="grow">
            <div style={menuTitleStyle}>
              <h3>Menu</h3>
            </div>
            <div>
              <ListItemButton
                style={listItemStyle}
                component="a"
                href="#simple-list"
              >
                Join Us
              </ListItemButton>
              <ListItemButton style={listItemStyle} component="a" to="/contact">
                Feedback
              </ListItemButton>
              <ListItemButton
                style={listItemStyle}
                component="a"
                href="#simple-list"
              >
                Colabrate
              </ListItemButton>
            </div>
            <Grid>
              <div style={menuTitleStyle}>
                <h3>Contact Us</h3>
              </div>
              <Grid>
                <ListItemButton
                  style={listItemStyle}
                  component="a"
                  href="mailto:cwc@vitbhopal.ac.in"
                >
                  Email
                </ListItemButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid textAlign={"center"} size="grow">
            <div style={menuTitleStyle}>
              <h3>Social Link&apos;s</h3>
            </div>
            <div>
              <ListItemButton
                style={listItemStyle}
                component="a"
                href="#simple-list"
              >
                LinkedIn
              </ListItemButton>
              <ListItemButton
                style={listItemStyle}
                component="a"
                href="#simple-list"
              >
                Instagram
              </ListItemButton>
              <ListItemButton
                style={listItemStyle}
                component="a"
                href="#simple-list"
              >
                Twitter
              </ListItemButton>
              <ListItemButton
                style={listItemStyle}
                component="a"
                href="#simple-list"
              >
                Discord
              </ListItemButton>
            </div>
          </Grid>
        </Grid>
        <Grid style={copyRightStyle} container spacing={1}>
          <p>
            This website is under the copyright &copy; of Cyber Warriors Club,
            VIT Bhopal University
          </p>
        </Grid>
      </Box>
    </>
  );
};

export default footer;
