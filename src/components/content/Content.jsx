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
        marginBottom: "auto"
      }}
      maxWidth="md"
    >
      <Box
        component="header"
        sx={{
          marginLeft: theme.spacing(10),
          [theme.breakpoints.down("lg")]: {
            marginLeft: theme.spacing(20)
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
