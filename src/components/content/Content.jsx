import { Typography, Container, Box, useTheme } from "@mui/material";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

export const Content = () => {
  const theme = useTheme();

  return (
    <Container
      component="main"
      sx={{       
        maxWidth: "100vw",
        marginTop: "10vw",
        marginBottom: "12vh",
        [theme.breakpoints.down("md")]: {
          marginTop: "30vh",
          marginBottom: "17vh"
        },
        [theme.breakpoints.down("md")]: {
          marginTop: "20vh",
          marginBottom: "30vh"
        }
      }}
    >
      <Box
        component="header"
        sx={{
          marginLeft: theme.spacing(40),
          [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(30)
          },
          [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(10)
          }
        }}
      >
        <Typography variant="h5" component="h2">
          <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            [theme.breakpoints.down("md")]: {
              fontSize: "3rem",
              lineHeight: "3rem"
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "2.75rem",
              lineHeight: "2.75rem"
            }
          }}
        >
          <TextDecrypt text={`${Resume.basics.job1}  `} />
          <TextDecrypt text={`${Resume.basics.job2}`} />
        </Typography>
      </Box>
    </Container>
  );
};
