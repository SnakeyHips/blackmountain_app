import { createMuiTheme, Theme, fade } from "@material-ui/core/styles";
import { grey, green } from "@material-ui/core/colors";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: green.A700
    },
    secondary: {
      main: fade(green.A700, 0.1)
    },
    background: {
      default: "#2E3032",
      paper: "#1F2123"
    },
    text: {
      primary: grey[50]
    },
    type: "dark"
  },
  typography: {
    fontFamily: "Public Sans, sans-serif"
  }
});

export default theme;
