import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

import { ROUTES } from "../../utils/routes";
// import Product from "../product/Product";

import { getProducts } from "../../store/productSlice";
import { getCategories } from "../../store/categoriesSlice";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        addProduct(response.data);

        setData(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => {
        addCategories(response.data);

        // setData(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [categoryId, setCategoryID] = useState(0);

  const [categoryName, setCategoryName] = useState("All categories");

  const changeCategory = (id, name) => {
    setCategoryID(id);
    setCategoryName(name);
  };

  console.log("id: ", categoryId);

  const categories = useSelector((state) => state.categories.categories);

  const cart = useSelector((state) => state.cart);

  const products = useSelector((state) => state.products.products);

  console.log("products. data: ", data);

  const dispatch = useDispatch();

  // dispatch(getProducts('ghj'));

  // const addCart = (title, description) => {
  //   dispatch(addToCart(title, description))
  const addCart = (user) => {
    dispatch(addToCart(user));
    console.log("cart: ", cart);
  };

  const addProduct = (data) => {
    dispatch(getProducts(data));
    console.log("Storrrrrrrrrrrrrrrr: ", products);
  };

  const addCategories = (data) => {
    dispatch(getCategories(data));
    console.log("Categoriessssssssssss: ", categories);
  };

  console.log("Stor123: ", products);
  console.log("Categories123: ", categories);

  return (
    <Container>
    <Box sx={{ mt: "40px" }}>
      <div>
        <Typography variant="h4" component="h2">
          {categoryName}
        </Typography>

        {/* <Button onClick={() => addProduct()}>В стор</Button> */}

        <Grid container spacing={1}>
          <Grid
            container
            item
            xs="12"
            sm="6"
            md="2"
            // sx={{ border: "solid 1px" }}
            justifyContent="center"
          >
            <List>
              <ListItem
                color="red"
                onClick={() => changeCategory(0, "All categories")}
              >
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  // sx={{ color: "red" }}

                  primary="All categories"
                />
              </ListItem>

              {categories.map((category, index) => {
                return (
                  index < 5 && (
                    <ListItem
                      key={category.id}
                      color="red"
                      onClick={() => changeCategory(category.id, category.name)}
                    >
                      <ListItemText
                        sx={{ cursor: "pointer" }}
                        // sx={{ color: "red" }}

                        primary={category.name}
                      />
                    </ListItem>
                  )
                );
              })}
            </List>

            {/* <Grid
              container
              // item
              // xs="12"
              // sm="6"
              // md="10"
              // sx={{ border: "solid 1px" }}
              justifyContent="center"
            >
              {categories.map((category, index) => {
                return (
                  index < 5 && (
                    <Grid
                      container
                      item
                      xs="12"
                      sm="6"
                      md="2"
                      key={index}
                      // sx={{ border: "solid 1px" }}
                      justifyContent="center"
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {category.name}
                      </Typography>
                    </Grid>
                  )
                );
              })}
            </Grid> */}
          </Grid>

          <Grid
            container
            item
            xs="12"
            sm="6"
            md="10"
            // sx={{ border: "solid 1px" }}
            justifyContent="center"
          >
            <Grid container spacing={4}>
              {products.map(
                (product, i) =>
                  i < 25 &&
                  (categoryId === 0 || product.category.id === categoryId) && (
                    <Grid
                      container
                      item
                      xs="12"
                      sm="6"
                      md="4"
                      key={product.id}
                      // sx={{ border: "solid 1px" }}
                      justifyContent="center"
                    >
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 320 }}
                          image={product.images[0]}
                          title={product.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product.description}
                          </Typography>
                          <Typography variant="h6" component="h2">
                            {product.price} $
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Link to={`${ROUTES.PRODUCT}/${product.id}`} underline="none">
                            {/* <Product/> */}

                            <Button size="small">Подробнее</Button>
                          </Link>

                          <Button size="small" onClick={() => addCart(product)}>
                            В корзину
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  )
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Box>
    </Container>
  );
};

export default Products;
