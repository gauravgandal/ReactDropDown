import React from "react";
import productBlack from "./black.jpeg";
import productBrown from "./brown.jpeg";

class ProductImage extends React.Component {
  render() {
    const { selectedProduct } = this.props;
    return (
      <div id="product-image">
        <img
          alt="tempalt"
          className="img-fluid"
          src={selectedProduct === "Black" ? productBlack : productBrown}
        />
      </div>
    );
  }
}

export default ProductImage;