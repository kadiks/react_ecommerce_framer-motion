import products from "../../data"

import Product from "./Product"

function Product1() {
  return <Product {...products[0]} />
}

export default Product1
