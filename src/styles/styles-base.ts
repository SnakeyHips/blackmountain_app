import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: "Public Sans, sans-serif",
      display: "flex",
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "unset"
      },
      "& p": {
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
        whiteSpace: "pre-line"
      },
      "& li": {
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em"
      },
      "& h6": {
        fontSize: "1.25rem",
        fontWeight: 700,
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
        marginTop: 8,
        marginBottom: 8
      },
      "& .MuiButton-root": {
        fontWeight: 700
      },
      "& .MuiExpansionPanel-root:before": {
        backgroundColor: "unset !important"
      }
    },
    content: {
      flexGrow: 1
    },
    primaryText: {
      color: theme.palette.primary.main
    },
    textCenter: {
      textAlign: "center"
    },
    textRight: {
      textAlign: "right"
    },
    button: {
      margin: theme.spacing(1)
    },
    mt3: {
      marginTop: theme.spacing(3)
    },
    mt6: {
      marginTop: theme.spacing(6)
    },
    mb2: {
      marginBottom: theme.spacing(2)
    },
    mb3: {
      marginBottom: theme.spacing(3)
    },
    mb6: {
      marginBottom: theme.spacing(6)
    },
    ml2: {
      marginLeft: theme.spacing(2)
    },
    fullHeight: {
      height: "100vh"
    },
    boldText: {
      fontWeight: 700
    },
    contentContainer: {
      padding: theme.spacing(7),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
      }
    },
    headerImage: {
      height: "100vh",
      width: "100%",
      objectFit: "cover",
      [theme.breakpoints.down("md")]: {
        height: `calc(100vh - ${theme.spacing(7)})`
      }
    },
    headerText: {
      position: "absolute",
      bottom: 0,
      right: 0,
      padding: theme.spacing(4),
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: "3.5rem",
      letterSpacing: "0.00938em",
      textAlign: "right",
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
        fontSize: "1.75rem",
        lineHeight: "2.5rem"
      }
    },
    homeLogo: {
      width: "100%",
      objectFit: "cover",
      maxHeight: 280
    },
    contentTitle: {
      fontSize: "2.125rem",
      color: theme.palette.primary.main,
      fontWeight: 700,
      lineHeight: 1.17,
      letterSpacing: "0.00735em",
      marginTop: 8,
      marginBottom: 8,
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
        lineHeight: 1.33,
        letterSpacing: 0,
        textAlign: "center"
      }
    },
    fillHeight: {
      height: "100%"
    },
    avatar: {
      height: 200,
      width: 200,
      margin: "auto",
      borderRadius: "50%"
    },
    divider: {
      margin: `${theme.spacing(4)}px !important`
    },
    card: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    },
    cardPadding: {
      padding: theme.spacing(2)
    },
    ctaLogo: {
      display: "flex",
      height: 100,
      margin: "auto"
    }
  })
);

export default useStylesBase;
