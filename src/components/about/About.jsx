import { Container, Typography } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import "./About.css";

export const About = () => {
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}. Code passionate based in Medellín, Antioquia, specialized on business adapted solutions development. 
  Let´s work together and code amazing projects! 
   `;

  return (
    <section id="about">
      <Container
        component="main"
        sx={{
          display: "flex",
          maxWidth: "100vw",
          marginTop: "3em",
          marginBottom: "auto"
        }}
        maxWidth="md"
      >
        <div className="about">
          <div className="_img"></div>
          <div className="_content_wrapper">
            <Typography component="h2" variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">{aboutme}</p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component="span"> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
