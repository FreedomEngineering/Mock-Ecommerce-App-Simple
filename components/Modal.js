import React from "react";

export const ModalButton = () => (
  <button
    type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target=".bd-example-modal-lg"
  >
    Large modal
  </button>
);

export const Modal = ({ _id, name, images, shortDescription, price }) => (
  <div
    class="modal fade bd-example-modal-lg"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">...</div>
    </div>
  </div>
);
