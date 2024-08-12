import { Route, Routes } from "react-router-dom"
import { ROUTES } from "../utils/routes"

import Products from '../components/products/Products'
import Cart from '../components/cart/Cart'
import Product from '../components/product/Product'

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element = {<Products />} />
        <Route path = {ROUTES.CART} element = {<Cart />} />
        <Route path = {ROUTES.PRODUCTS} element = {<Products />} />
        <Route path = {ROUTES.PRODUCT} element = {<Product />} />
    </Routes>
  )
}

export default AppRoutes