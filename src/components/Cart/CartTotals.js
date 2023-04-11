import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to="/pay">
              <button
                className="btn btn-outline-success mb-3 px-5 mr-3"
                type="button"
              >
                Đặt hàng
              </button>
            </Link>
            <button
              className="btn btn-outline-danger mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              Xóa tồn bộ
            </button>
            <h5>
              <span className="mr-3 text-uppercase text-bold">
                giá tạm tính:
              </span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="mr-3 text-uppercase text-bold">thuế:</span>
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span className="mr-3 text-uppercase text-bold">tổng:</span>
              <strong>${cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
