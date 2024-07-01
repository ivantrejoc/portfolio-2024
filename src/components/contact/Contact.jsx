import { useRef, useState } from "react";
import { Container, Typography, TextField } from "@mui/material";
import { useTheme } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from "sweetalert2";
import validation from "./validation";
import emailjs from "@emailjs/browser";

import "./Contact.css";

export const Contact = () => {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === "light";
  const greetings = "Say hello.";
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  console.log("LAS ENV: ", TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY);
  const [input, setInput] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  console.log(errors);
  const changeHandler = (event) => {
    //CONTROLA EL FORMULARIO
    const property = event.target.name;
    const value = event.target.value;

    setInput({ ...input, [property]: value });
    setErrors({
      ...errors,
      [property]: validation({ ...input, [property]: value })[property]
    }); //validaciones por cada onchange de cada input
  };

  const resetForm = () => {
    setInput({
      from_name: "",
      from_email: "",
      message: ""
    });

    setErrors({
      from_name: "",
      from_email: "",
      message: ""
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          resetForm();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have sent an email!",
      showConfirmButton: false,
      timer: 1500
    });
    e.target.reset();
  };

  return (
    <section id="contact">
      <Container
        component="main"
        sx={{
          maxWidth: "100vw",
          marginTop: "3em",
          marginBottom: "3em"
        }}
        maxWidth="md"
      >
        <div className="contact">
          <div
            className="_form_wrapper"
            style={{
              background: isLightTheme
                ? "rgba(249, 249, 249, 0.8)"
                : "rgba(109, 109, 109, 0.4)"
            }}
          >
            <form ref={form} onSubmit={sendEmail} className="form">
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="from_name"
                value={input.from_name}
                onChange={changeHandler}
                sx={{
                  width: "100%",
                  marginBottom: "2rem"
                }}
              />

              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="from_email"
                value={input.from_email}
                onChange={changeHandler}
                sx={{
                  width: "100%",
                  marginBottom: "2rem"
                }}
              />

              <TextField
                id="outlined-password-input"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                value={input.message}
                onChange={changeHandler}
                sx={{
                  width: "100%",
                  marginBottom: "1rem"
                }}
              />
              {!input.from_name && !input.from_email && !input.message ? (
                <Typography
                  component="span"
                  sx={{
                    fontSize: theme.typography.pxToRem(9),
                    marginBottom: "1rem"
                  }}
                >
                  {" "}
                  Please complete all the fields.
                </Typography>
              ) : null}
              {input.from_name && input.from_email && input.message ? (
                <button type="submit" value="Send" className="submit-btn">
                  <i className="fas fa-terminal"></i>
                  <Typography component="span"> Send Message</Typography>
                </button>
              ) : (
                <button
                  type="submit"
                  value="Send"
                  className="submit-btn"
                  disabled
                >
                  <i className="fas fa-terminal"></i>
                  <Typography component="span"> Send Message</Typography>
                </button>
              )}
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings} />
          </h1>
        </div>
      </Container>
    </section>
  );
};
