import Logo from "../assets/logo.png";
import Navbar from "../components/navbar";

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "4.6rem",
  height: "7vh",
  color: "#8C38F7",
  padding: "4rem 0",
};

const textBoxStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const headerTextStyle = {
  fontSize: "2rem",
};

const logoStyle = {
  width: "10%",
  marginRight: "3rem",
};

const header = () => {
  return (
    <>
      <div style={headerStyle}>
        <div style={textBoxStyle}>
          <img style={logoStyle} src={Logo} alt="Logo" />
          <div style={headerTextStyle}>
            <p>Cyber Warriors</p>
          </div>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default header;
