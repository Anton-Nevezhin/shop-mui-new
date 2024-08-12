import React from "react";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <>
      {/* <Box
        sx={{
          width: '100%',
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Интернет-магазин на Redux с MUI
            </Typography>
        Footer
      </Box> */}

      <Container
        sx={{
          width: "100%",
          height: 100,
          borderRadius: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        Footer
      </Container>
    </>
    // <div>Footer</div>
  );
};

export default Footer;
