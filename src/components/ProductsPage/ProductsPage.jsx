import React from "react";
import Product from "./Product";
import products from "../../resources/data/products.json"


const ProductsPage = () => {
  
  //   let result = products.filter(({tags}) => {
  //     return tags.some(e => e.includes("rat")) filter
  //   })
  // console.log(result)

  return (
    <>
      <div className="wrapper">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
export default ProductsPage;


