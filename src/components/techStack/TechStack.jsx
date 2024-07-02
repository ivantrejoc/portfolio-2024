import { Grid, Typography, useTheme } from "@mui/material";
import jsIcon from "../../assets/icons/javascript-plain.svg";
import htmlIcon from "../../assets/icons/html5-plain.svg";
import cssIcon from "../../assets/icons/css3-plain.svg";
import reactIcon from "../../assets/icons/react-original.svg";
import nodeIcon from "../../assets/icons/nodejs-plain.svg";
import reduxIcon from "../../assets/icons/redux-original.svg";
import tailwindIcon from "../../assets/icons/tailwindcss-plain.svg";
import mongoIcon from "../../assets/icons/mongodb-original.svg";
import postgresIcon from "../../assets/icons/postgresql-plain.svg";
import sequelizeIcon from "../../assets/icons/sequelize-original.svg";
import "./techStack.css";

export const TechStack = () => {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === "light";

  return (
    <section
      id="techstack"
      className="container"
      style={{
        background: isLightTheme
          ? "rgba(249, 249, 249, 0.8)"
          : "rgba(109, 109, 109, 0.4)"
      }}
    >
      <Typography
        variant="h3"
        sx={{          
          marginTop: "1vw",
          marginLeft: "9vw",
          justifyContent: "start",
          [theme.breakpoints.down("md")]: {
            marginLeft: "4vw"
          }
        }}
      >
        Tech Stack
      </Typography>
      <Grid
        sx={{          
          width: "75%",
          marginTop: "1vw",
          marginLeft: "9vw",
          marginRight: "auto",
          marginBottom: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "1fr, 1fr",
          gridGap: theme.spacing(0),
          rowGap: theme.spacing(5),
          [theme.breakpoints.down("md")]: {
            gridGap: theme.spacing(1),
            rowGap: theme.spacing(0),
            marginLeft: "6vw",
            marginRight: "4vw",
            marginBottom: "auto",
            fontSize: "3rem"
          }
        }}
        
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={jsIcon} alt="javascript" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={htmlIcon} alt="html-5" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={cssIcon} alt="ccs-3" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={nodeIcon} alt="node-js" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={reactIcon} alt="react" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={reduxIcon} alt="redux" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={tailwindIcon} alt="tailwind" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={sequelizeIcon} alt="sequelize" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={postgresIcon} alt="postgres" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="icons" src={mongoIcon} alt="mongoDB" />
        </Grid>
      </Grid>
    </section>
  );
};
