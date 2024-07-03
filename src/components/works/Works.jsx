/* eslint-disable no-unused-vars */
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import { Container, useTheme } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import Wanderlust from "../../assets/img/wanderlust.webp";
import Worksplace from "../../assets/img/worksplace.webp";
import Now from "../../assets/img/now.webp";
import Vsp from "../../assets/img/vsp.webp";
import Buime from "../../assets/img/buime-shop.webp";
import Chelion from "../../assets/img/chelion.webp";
import WebWizard from "../../assets/img/web-wizard.webp";
import DiomarGarcia from "../../assets/img/diomar-garcia.webp";
import Zoero from "../../assets/img/zoero-website.webp";

import "./Works.css";

export const Works = () => {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === "light";
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Chelion",
      description: `European solar projects leader´s website. Developed with vanilla JS, HTML5 and CSS3.`,
      alter: "Chelion",
      image: `${Chelion}`,
      url: "https://chelion-website.vercel.app/"
    },
    {
      id: 2,
      title: "Web Wizard Lab",
      description: `Web Development Agency website. Developed with Astro, and TailwindCSS components.`,
      alter: "Web Wizard",
      image: `${WebWizard}`,
      url: "https://webwizardlab.com/"
    },
    {
      id: 3,
      title: "Buime",
      description: `Nice ecommerce which renders fakestore api, includes shopping cart and checkout view, will soon have a payment runway with Stripe. Developed using Next Js, Typescript and TailwindCSS.`,
      alter: "Buime",
      image: `${Buime}`,
      url: "https://buime-ecommerce.vercel.app/"
    },
    {
      id: 4,
      title: "Worksplace",
      description: `Landing page to employment agency based in New York, developed in Wordpress.`,
      alter: "Worksplace",
      image: `${Worksplace}`,
      url: "https://worksplaceus.com/"
    },
    {
      id: 5,
      title: "Diomar Garcia Eventos",
      description: `Website of the most famous concerts producer in Colombia. Developed with Vite + React, Material UI and animations with GSAP.`,
      alter: "Diomar García Eventos",
      image: `${DiomarGarcia}`,
      url: "https://diomargarcia.vercel.app/"
    },
    {
      id: 6,
      title: "Now Agency",
      description: `Landing page to marketing agency based in Medellín, Colombia. Developed in Wordpress with CSS and PHP.`,
      alter: "Now Agency",
      image: `${Now}`,
      url: "https://nowagency.com.co/"
    },
    {
      id: 7,
      title: "Vive Sano Prime",
      description: `Landing page to health education platform based in Brazil. Developed in Wordpress with CSS and PHP.`,
      alter: "Vive Sano",
      image: `${Vsp}`,
      url: "https://vivesanoprime.org/"
    },
    {
      id: 8,
      title: "Zoero",
      description: `Beautiful website for a Marketing and strategy agency. Devolped with Vite + React, Material UI and Gsap.`,
      alter: "Zoero",
      image: `${Zoero}`,
      url: "https://zoerowebsite.vercel.app/"
    },

    {
      id: 9,
      title: "Wanderlust",
      description: `Amazing e-commerce aimed to sell travel packages. Stands out for its third-party authentication, DBB, sorts, filters, shopping cart and PayPal payment runway.`,
      alter: "Wanderlust",
      image: `${Wanderlust}`,
      url: "https://wanderlust-phi.vercel.app/home"
    }
  ]);

  return (
    <section id="works">
      <Container
        component="main"
        sx={{
          marginTop: "3em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "auto"
        }}
        maxWidth="md"
      >
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <LazyLoad
              className="__img_wrapper"
              debounce={false}
              offsetVertical={500}
            >
              <img src={project.image} alt={project.alter} />
            </LazyLoad>

            <div
              className="__content_wrapper"
              style={{
                background: isLightTheme
                  ? "rgba(249, 249, 249, 0.8)"
                  : "rgba(109, 109, 109, 0.4)"
              }}
            >
              <a href={project.url} className="link">
                <h3 className="title">
                  <TextDecrypt text={project.id + ". " + project.title} />
                </h3>
              </a>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
