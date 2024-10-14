import { Container } from "@mui/material";
import Footer from "../../../ui/footer";
import Header from "../../../ui/header";

const event = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <h1>Events Page</h1>
        <Footer />
      </Container>
    </>
  );
};

export default event;
