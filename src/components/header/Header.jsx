import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Link  to={ROUTES.HOME}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "white"}}
            >
              <HomeIcon />
              {/* <Link to={ROUTES.CART}><p>Ссылка</p></Link> */}

            </IconButton>
            </Link>

            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Интернет-магазин на Redux с MUI
            </Typography>
            <Link  to={ROUTES.CART} href="#" underline="none">
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Интернет-магазин на Redux с MUI
            </Typography> */}
            <ShoppingCartIcon
            sx={{ mr: 1, color: "white"}}
            />
            
  {/* {'underline="always"'} */}
</Link>
            {/* <Link to={ROUTES.CART}>Cart</Link> */}
            <Button color="inherit">Login</Button>
            
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
