import React from "react";
import ProductOptions from "./ProductOptions";
import ProductImage from "./ProductImage";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedProduct: "Black"
    };
  }

  handleSelectedProduct = selection => {
    this.setState({ selectedProduct: selection });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <ProductOptions
              handleSelectedProduct={this.handleSelectedProduct}
              selectedProduct={this.state.selectedProduct}
            />
          </div>
          <div className="col-4">
            <ProductImage selectedProduct={this.state.selectedProduct} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;