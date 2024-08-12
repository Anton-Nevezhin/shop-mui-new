import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
// import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";

import { ROUTES } from "../../utils/routes";
import { removeFromCart } from "../../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  console.log("cart: ", cart);

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <Container>
    <div>
      <h1>Корзина:</h1>
      <Grid container spacing={4}>
        {cart.map((user, i) => (
          <Grid
            container
            item
            xs="12"
            sm="6"
            md="4"
            key={user.id}
            justifyContent="center"
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 320 }}
                image={user.images[0]}
                title={user.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.description}
                </Typography>
                <Typography variant="h6" component="h2">
                  {user.price} $
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={ROUTES.PRODUCT} href="#" underline="none">
                  <Button size="small">Подробнее</Button>
                </Link>

                <Button
                  size="small"
                  onClick={() => dispatch(removeFromCart(user.id))}
                >
                  Удалить
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* // sx={{ border: "solid 1px" }} */}

      <Grid
        spacing={4}
        xs={10}
        alignItems="center"
        sx={{ mt: "40px" }}
      >
        {cart.map((user, i) => (
          <Grid container spacing={2} sx={{ mt: "40px" }}>
            <Grid item xs={2}>
              <img
                src={user.images[0]}
                alt="Uploaded"
                width="200"
                height="200"
              />
            </Grid>
            <Grid item xs={2}>
              <Typography gutterBottom variant="h5" component="div">
                {user.title}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="text.secondary">
                {user.description}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" component="h2">
                {user.price} $
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Link to={ROUTES.PRODUCT} href="#" underline="none">
                <Button size="small">Подробнее</Button>
              </Link>
              <Button
                size="small"
                onClick={() => dispatch(removeFromCart(user.id))}
              >
                Удалить
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* <Grid container spacing={2} sx={{ mt: "40px" }}>
          <Grid item xs={2}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=8</Item>
          </Grid>
        </Grid> */}

      {/* 
      <Grid container spacing={4}>
      <Grid
                container
                item
                xs="12"
                sm="6"
                md="12"
                // key={user.id}
                justifyContent="center"
              >
                Привет!!!
</Grid>
<Grid
                container
                item
                xs="12"
                sm="6"
                md="12"
                // key={user.id}
                justifyContent="center"
              >
                Привет!!!
</Grid>
<Grid
                container
                item
                xs="12"
                sm="6"
                md="12"
                // key={user.id}
                justifyContent="center"
              >
                Привет!!!
</Grid>
      </Grid> */}
    </div>
    </Container>
  );

  
};

export default Cart;
