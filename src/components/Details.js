import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } =
            value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>model: {title}</h2>
                  <h4 className="text-title  text-muted mt-3 mb-2">
                    made by: <span className="">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Giá: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">
                    Thông tin về sản phẩm:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Quay lại cửa hàng</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disable={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "Đã có trong giỏ hàng" : "Thêm vào giỏ hàng"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
