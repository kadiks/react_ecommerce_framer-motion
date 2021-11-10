import products from "../../data"

import Product from "./Product"

function Product2() {
  return <Product {...products[1]} />
}

export default Product2
