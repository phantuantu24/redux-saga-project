import { createMuiTheme } from "@material-ui//core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main:  "#448AFF"
    },
    secondary: {
      main: "#3F51B5"
    },
    error: {
      main: "#D32F2F"
    }
  },
  typography: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "Italic",
    fontFamily: "sans-serif monospace"
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#7B1FA2",
    textColor: "#FFFFFF",
    border: "#CCCCCC",
    marginTop: 20
  },
})

export default theme