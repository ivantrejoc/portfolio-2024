import { Container, Typography, useTheme } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import "./About.css";

export const About = () => {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === "light";
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}. Full-stack Developer, Passionate about coding based in Sevilla - Spain.
Specialized in business-oriented solutions, Backend development with robust, efficient, and secure logic, and managing SQL and NoSQL databases. Frontend development with responsive and elegant design.
Let's work together and create amazing projects!
   `;

  return (
    <section id="about">
      <Container
        component="main"
        sx={{
          display: "flex",
          maxWidth: "100vw",
          marginTop: "3em",
          marginBottom: "auto",
          [theme.breakpoints.down("lg")]: {
            justifyContent: "center"
          }
        }}
        maxWidth="md"
      >
        <div className="about">
          <div className="_img"></div>
          <div
            className="_content_wrapper"
            style={{
              background: isLightTheme
                ? "rgba(249, 249, 249, 0.8)"
                : "rgba(109, 109, 109, 0.4)"
            }}
          >
            <Typography component="h2" variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">{aboutme}</p>
            <a
              href="#contact"
              className="contact-btn"
              style={{
                color: isLightTheme ? "#464646" : "#FAFAFA"
              }}
            >
              <i className="fas fa-terminal"></i>
              <Typography component="span"> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
