import { createMuiTheme } from "@material-ui//core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main:  "#607D8B"
    },
    secondary: {
      main: "#795548"
    },
    error: {
      main: "#D32F2F"
    }
  },
  typography: {
    fontFamily: "sans-serif",
    fontSize: 16
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#7B1FA2",
    textColor: "#FFFFFF",
    border: "#CCCCCC"
  }
})

export default theme