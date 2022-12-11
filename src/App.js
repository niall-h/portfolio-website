import React from "react";
import {
  Box,
  Typography,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Button,
  Link,
} from "@mui/material";

const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      sx={{ backgroundColor: "white" }}
    >
      <Box display="block" textAlign="center">
        <ThemeProvider theme={theme}>
          <Typography variant="h2" mb={5}>
            Hey! This is Nyan.
          </Typography>
          <Typography variant="h5" mb={5}>
            I finally afforded my own domain so my portfolio is now being hosted
            on{" "}
            <Link href="http://www.nyanminhtet.com/">www.nyanminhtet.com</Link>!
          </Typography>
        </ThemeProvider>
        <Button
          variant="contained"
          size="large"
          href="http://www.nyanminhtet.com"
        >
          Take Me There!
        </Button>
      </Box>
    </Box>
  );
};

export default App;
