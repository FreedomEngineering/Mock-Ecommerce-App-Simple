import React from "react";

import { formatPrice } from "../lib/utils";

const Product = ({ _id, name, images, shortDescription, price }) => (
  <div className="card product">
    <div className="card-body">
      <img
        className="shadow rounded img-thumbnail"
        src={images[0].src}
        alt={images[0].alt}
      />
      <hr />
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        {`$${formatPrice(price)}`}
      </h6>
      <p className="card-text">{shortDescription}</p>
    </div>
  </div>
);

export default Product;
