import React, { Fragment } from "react";

import { formatPrice } from "../lib/utils";

export const ModalButton = ({ onClick }) => (
  <button
    type="button"
    className="btn btn-outline-primary"
    data-toggle="modal"
    data-target="#productModal"
    onClick={onClick}
  >
    View Details
  </button>
);

export const Modal = ({
  name,
  images,
  shortDescription,
  longDescription,
  price
}) => (
  <div
    id="productModal"
    className="modal fade"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        {!images ? null : (
          <Fragment>
            <div id="productPage" className="container">
              <div className="row">
                <div className="col mainImage">
                  <img
                    className="img-fluid shadow p-3 bg-white rounded"
                    src={images[0].src}
                    alt={images[0].alt}
                  />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <h1>{name}</h1>
                  <h6 className="price">{`Price: $${formatPrice(price)}`}</h6>
                  <hr />
                  <h4 className="shortDescription">{shortDescription}</h4>
                  <div className="form-row flex-container">
                    <div className="col addToCart">
                      <button
                        type="button"
                        className={`btn btn-primary btn-lg`}
                        onClick={() => {}}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row longDescription">
                  <div className="col-xs-12">
                    <h3>Product Description</h3>
                    {longDescription.map(desc => (
                      <p key={desc.slice(0, 10)} className="text-justify">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  </div>
);
