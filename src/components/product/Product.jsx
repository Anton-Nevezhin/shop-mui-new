import React from "react";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import axios from "axios";

import productService from '../../services/productService'

// import Box from "@material-ui/core/Box";
// import Paper from '@material-ui/core/Paper';
// import Grid from "@material-ui/core/Grid";
import { Grid } from "@mui/material";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

// import { getProducts } from '../../store/productSlice'

const Product = (id) => {
  // const products = useSelector((state => state.product))

  const [data, setData] = useState([]);

  // const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/1`)
      .then((response) => {
        setData(response.data);
        // dispatch(getProducts(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect({dispatch(getProducts(data))}, [data])

  // dispatch(getProducts(data))

  console.log("Продукт: ", data);

  // console.log('Продукт1: ', products)

  return (
    <Container>
      {/* <Container> */}
        <p>Продукт</p>
      {/* </Container> */}
      
      <Grid container spacing={4}>
        <Grid
          container
          item
          xs="12"
          sm="6"
          md="2"
          sx={{ border: "solid 1px" }}
          justifyContent="center"
        ></Grid>
                <Grid
          container
          item
          xs="12"
          sm="6"
          md="10"
          sx={{ border: "solid 1px" }}
          justifyContent="center"
        >{data.title}</Grid>
      </Grid>
    </Container>
  );
};

export default Product;
