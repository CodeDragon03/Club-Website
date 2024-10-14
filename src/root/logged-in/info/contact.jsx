import { Container } from "@mui/material";
import Footer from "../../../ui/footer";
import Header from "../../../ui/header";
import Form from "../../../components/form";

const contact = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Form />
        <Footer />
      </Container>
    </>
  );
};

export default contact;
