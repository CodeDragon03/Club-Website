import { Container } from "@mui/material";
import Footer from "../../../ui/footer";
import Header from "../../../ui/header";
import Article from "../../../components/article";

const newsleter = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Article />
        <Footer />
      </Container>
    </>
  );
};

export default newsleter;
