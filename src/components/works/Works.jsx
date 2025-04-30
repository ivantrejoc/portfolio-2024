/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Container, useTheme } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import Worksplace from "../../assets/img/worksplace.webp";
import Now from "../../assets/img/now.webp";
import Buime from "../../assets/img/buime-shop.webp";
import JvSolutions from "../../assets/img/jv-solutions.webp";
import WebWizard from "../../assets/img/web-wizard.webp";
import DiomarGarcia from "../../assets/img/diomar-garcia.webp";
import Zoero from "../../assets/img/zoero-website.webp";
import GymFitness from "../../assets/img/gymfitness.webp";
import Caloriko from "../../assets/img/caloriko.webp";
import AdoptMe from "../../assets/img/adoptme.webp";

import "./Works.css";

export const Works = () => {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === "light";
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "GymFitness",
      description: `Fully dynamic website developed with WordPress + PHP + JS. Theme and plugins tailor fit developed from scratch. Sections are totally customizable by the manager thanks to Advanced Custom Fields features`,
      alter: "Gymfitness",
      image: `${GymFitness}`,
      url: "https://dev-gymfitnessmrd.pantheonsite.io/"
    },
    {
      id: 2,
      title: "JV Solutions",
      description: `Beautiful website to the best motorcycles workshop in Panama. Developer with Wordpess +
      PHP + JS.`,
      alter: "jv-solutions",
      image: `${JvSolutions}`,
      url: "https://jvsolutionspty.com/"
    },
    {
      id: 3,
      title: "Web Wizard Lab",
      description: `Web Development Agency website. Developed with Astro, and TailwindCSS components.`,
      alter: "Web Wizard",
      image: `${WebWizard}`,
      url: "https://webwizardlab.com/"
    },
    {
      id: 4,
      title: "Buime",
      description: `Nice ecommerce which renders fakestore api, includes shopping cart and checkout view, will soon have a payment runway with Stripe. Developed using Next Js, Typescript and TailwindCSS.`,
      alter: "Buime",
      image: `${Buime}`,
      url: "https://buime-ecommerce.vercel.app/"
    },
    {
      id: 5,
      title: "Worksplace",
      description: `Landing page to employment agency based in New York, developed in Wordpress.`,
      alter: "Worksplace",
      image: `${Worksplace}`,
      url: "https://worksplaceus.com/"
    },
    {
      id: 6,
      title: "Diomar Garcia Eventos",
      description: `Website of the most famous concerts producer in Colombia. Developed with Vite + React, Material UI and animations with GSAP.`,
      alter: "Diomar García Eventos",
      image: `${DiomarGarcia}`,
      url: "https://diomargarcia.vercel.app/"
    },
    {
      id: 7,
      title: "Now Agency",
      description: `Landing page to marketing agency based in Medellín, Colombia. Developed in Wordpress with CSS and PHP.`,
      alter: "Now Agency",
      image: `${Now}`,
      url: "https://nowagency.com.co/"
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
      title: "Adoptme",
      description: `Adopt a pet, set favorites and chat with pets owners with this nice mobile app. Developed using Expo & React Native`,
      alter: "adoptme",
      image: `${AdoptMe}`,
      url: "https://expo.dev/accounts/ivantrejoc/projects/adoptme/builds/24debfaf-044a-4efd-949b-7b72dda9e0af"
    },
    {
      id: 10,
      title: "Caloriko",
      description: `Set and achieve your weight goals with this nice mobile app. Count calories, create your daily menus and more. Developed using Expo & React Native.`,
      alter: "caloriko",
      image: `${Caloriko}`,
      url: "https://expo.dev/accounts/ivantrejoc/projects/caloriko/builds/5f23d3f7-1e6b-4ed5-913c-a027b88a054a"
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
          gap: "1.5rem",
          justifyContent: "center",
          marginBottom: "auto"
        }}
        maxWidth="md"
      >
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div
              className="__content_wrapper"
              style={{
                background: isLightTheme
                  ? "rgba(249, 249, 249, 0.8)"
                  : "rgba(109, 109, 109, 0.4)"
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
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
