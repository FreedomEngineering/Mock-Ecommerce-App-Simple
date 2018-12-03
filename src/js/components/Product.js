import React from "react";

import { formatPrice } from "../../../lib/utils";
import { ModalButton } from "./Modal";

const Product = ({
  id,
  name,
  images,
  shortDescription,
  longDescription,
  price,
  onModalClick
}) => (
  <div className="card product">
    <div className="card-body">
      <img className="shadow rounded img-thumbnail" src={images[0].src} />
      <hr />
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        {`$${formatPrice(price)}`}
      </h6>
      <p className="card-text">{shortDescription}</p>
      <ModalButton
        onClick={() =>
          onModalClick({
            id,
            name,
            images,
            shortDescription,
            longDescription,
            price
          })
        }
      />
    </div>
  </div>
);

export default Product;
