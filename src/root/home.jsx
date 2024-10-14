import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/bgStyle.svg";
import Domain from "../assets/domian.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../ui/footer";
import Header from "../ui/header";

// Set the date of the event here
const eventDate = new Date("2024-10-16T00:00:00Z");

const formattedDate = eventDate.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
});

const heroStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "85vh",
  marginBottom: "4.6rem",
  color: "#8C38F7",
};

const aboutStyle = {
  height: "100vh",
  marginBottom: "4.8rem",
  color: "#8C38F7",
  position: "relative",
};

const featuredStyle = {
  height: "100vh",
  marginBottom: "4.6rem",
  color: "#8C38F7",
};

const titleStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "4.8rem",
};

const titleTextStyle = {
  fontSize: "1.6rem",
};

const headingPrimary = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "8.4rem",
  fontWeight: "bold",
  textAlign: "center",
  textTransform: "capitalize",
  position: "relative",
  zIndex: "10",
};

const heroImageStyle = {
  width: "150%",
  height: "110%",
  objectFit: "cover",
  position: "absolute",
  top: "2.8rem",
  right: "-6.8rem",
  zIndex: "-1",
};

const descriptionStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  textAlign: "center",
  textTransform: "capitalize",
  marginBottom: "15rem",
  position: "relative",
  width: "100%",
};

const tagStyle = {
  textTransform: "uppercase",
  color: "#000",
  backgroundColor: "#8C38F7",
  padding: ".75rem",
  marginBottom: "4.6rem",
  maxWidth: "10%",
};

const tagTextStyle = {
  position: "absolute",
  top: "5%",
  left: "50%",
  transform: "translate(50%, 50%)",
  maxWidth: "20ch",
  lineHeight: "1.7",
  fontSize: "1.6rem",
};

const eventButtonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.6rem",
  textTransform: "uppercase",
  color: "#fff",
  backgroundColor: "#8C38F7",
  padding: "1rem 2rem",
  borderRadius: "2rem",
};

const eventButtonArrowStyle = {
  display: "inline-block",
  fontSize: "1.6rem",
  fontWeight: "700",
  paddingLeft: "1rem",
  transform: "rotate(-40deg)",
};

const aboutImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const headingSecondary = {
  fontSize: "4.8rem",
  color: "#fff",
  width: "10ch",
  marginTop: "9.6rem",
};

const arrowBlockStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  alignItems: "center",
  width: "100%",
  marginTop: "9.6rem",
};

const joinButtonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.6rem",
  color: "red",
  position: "absolute",
  bottom: "2%",
  right: "5%",
  zIndex: "10",
  backgroundColor: "#000",
  border: ".1rem solid red",
  borderRadius: "2.6rem",
  textTransform: "uppercase",
};

const arrowButtonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.6rem",
  color: "#8C38F7",
  backgroundColor: "#000",
  padding: "1rem 2rem",
  borderRadius: "2rem",
};

const home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Box component="section" style={heroStyle}>
          <div style={titleStyle}>
            <div style={titleTextStyle}>
              <p>explore &mdash; new horiozns</p>
            </div>
            <div style={headingPrimary}>
              <div>
                <img style={heroImageStyle} src={Logo} alt="Logo" />
              </div>
              <div>Cyber</div>
              <div>Warriors</div>
            </div>
            <div>
              <div style={titleTextStyle}>
                <p>secure &mdash; your future</p>
              </div>
            </div>
          </div>
          <div style={descriptionStyle}>
            <div style={tagStyle}>
              <p>We&apos;re Unique</p>
            </div>
            <div style={tagTextStyle}>
              <p>
                Defenders of digital systems against cyber threats and attacks.
              </p>
            </div>
          </div>
          <div>
            <Link to="/event" style={{ textDecoration: "none" }}>
              <Button variant="contained" style={eventButtonStyle}>
                JOIN US IN OUR UPCOMING EVENT ON {formattedDate}
                <span style={eventButtonArrowStyle}>&rarr;</span>
              </Button>
            </Link>
          </div>
        </Box>
        <Box component="section" style={aboutStyle}>
          <img style={aboutImageStyle} src={Domain} alt="Domain" />
          <div>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Button variant="contained" style={joinButtonStyle}>
                Become A Cyber Warrior
              </Button>
            </Link>
          </div>
        </Box>
        <Box component="section" style={featuredStyle}>
          <div>
            <h2 style={headingSecondary}>Loved &amp; Trusted By</h2>
          </div>
          <div style={arrowBlockStyle}>
            <div>
              <Button variant="contained" style={arrowButtonStyle}>
                <ArrowBackIcon sx={{ fontSize: 40, marginRight: "2rem" }} />
              </Button>
            </div>
            <div>
              <Button variant="contained" style={arrowButtonStyle}>
                <ArrowForwardIcon sx={{ fontSize: 40 }} />
              </Button>
            </div>
          </div>
          <div></div>
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default home;
