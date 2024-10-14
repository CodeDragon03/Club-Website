import { useForm } from "react-hook-form";
import axios from "axios";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:5000/email", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      console.log("Email sent successfully", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const formBlockStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "9.6rem",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const blockStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const textBlockStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <>
      <div style={blockStyle}>
        <Typography
          variant="h3"
          gutterBottom
          style={{
            color: "white",
            fontSize: "8.6rem",
            marginBottom: "9.6rem",
          }}
        >
          Contact Us
        </Typography>
        <div style={formBlockStyle}>
          <div style={textBlockStyle}>
            <Typography
              variant="body1"
              style={{
                color: "white",
                marginBottom: "9.6rem",
                fontSize: "1.6rem",
                textAlign: "right",
                maxWidth: "60%",
              }}
            >
              Have something to discuss or a brilliant idea to share? Feel free
              to contact us! Our virtual doors are always open, waiting to hear
              your thoughts. Drop us a line, and let&apos;s make things happen
              together.
            </Typography>
          </div>
          <div style={formStyle}>
            <Container style={{ textAlign: "center", marginTop: "50px" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={2}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                    InputLabelProps={{ style: { color: "white" } }}
                    InputProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    sx={{ backgroundColor: "#1c1c1c", borderRadius: "5px" }}
                  />
                </Box>

                <Box mb={2}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    InputLabelProps={{ style: { color: "white" } }}
                    InputProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    sx={{ backgroundColor: "#1c1c1c", borderRadius: "5px" }}
                  />
                </Box>

                <Box mb={2}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    variant="outlined"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    error={!!errors.message}
                    helperText={errors.message ? errors.message.message : ""}
                    multiline
                    rows={4}
                    InputLabelProps={{ style: { color: "white" } }}
                    InputProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    sx={{ backgroundColor: "#1c1c1c", borderRadius: "5px" }}
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </Button>
              </form>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
