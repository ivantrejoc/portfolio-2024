import { BrowserRouter } from "react-router-dom";
import Router from "./router/index.jsx";
import { HelmetMeta } from "./HelmetMeta.jsx";
import MuiThemeProvider from "./theme/MuiThemeProvider"; // Importa tu proveedor de tema
import { logCredits } from "./utils/logCredits.js";
import "./assets/css/App.css";

const App = () => {
  logCredits();

  return (
    <MuiThemeProvider>
      <HelmetMeta />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
