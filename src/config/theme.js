import { createTheme } from "@mui/material";

const colors = {
  black: "#3E3E3C",
  secondary: "#C1BAC9",
  neutralPrimary: "#F8F4F0",
  neutralSecondary: "#EBE0D5",
  background: "#EBE0D5",
  bgGradient:
    "radial-gradient(circle, rgba(235,224,213,1) 22%, rgba(242,235,228,1) 76%, rgba(250,250,250,1) 100%)",
};

export const belieTheme = createTheme({
  palette: {
    primary: { main: "#C1BAC9" },
    secondary: { main: "#C1BAC9" },
    background: { default: "#F8F4F0" },
    black: { main: "#3E3E3C" },
  },
  typography: {
    fontSize:"16px",
    fontFamily: ["Josefin Sans", "Montserrat", '"Segoe UI"', "Roboto"].join(
      ","
    ),
  },
  components: {
    MuiTablePagination:{
      styleOverrides:{
        root:{
          fontSize:"0.7rem"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: colors.bgGradient,
          borderRadius: 5,
          boxShadow: "6px 7px 16px -1px rgba(62,62,60,0.28);",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          backgroundColor: "transparent",
          color: colors.black,
          borderColor: colors.black,
          borderWidth:1,
          fontWeight:600
        },
        root: {
          backgroundColor: colors.black,
          color: "#fff",
          fontWeight: 600,

          "&:hover": {
            backgroundColor: colors.secondary,
            color: colors.black,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          textDecorationStyle: "none",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: colors.secondary,
          },
          transition: "background-color 300ms ease-in",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background,
        },
      },
    },
  },
});