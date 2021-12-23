import React from "react";
import { formatPrice } from "../../helpers/helpers";
import iconNike from "./../../assets/nike.png";

function Card(props) {
  const { children, title, price, showPrice } = props;

  return (
    <div className="card">
      <div className="card-top">
        <img src={iconNike} className="card-top-logo" />
      </div>
      <div className="card-title">
        {title}
        {showPrice && (
          <span className="card-title-amount">{formatPrice(price)}</span>
        )}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
