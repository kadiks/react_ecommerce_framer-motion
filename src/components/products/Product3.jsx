import products from "../../data"

import Product from "./Product"

function Product3() {
  return <Product {...products[2]} />
}

export default Product3
