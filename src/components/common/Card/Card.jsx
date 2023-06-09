import React from "react";
import styled from "styled-components";
import HeartIcon from "asserts/heart-icon.svg";
import SearchIcon from "asserts/search-icon.svg";
import ShopNowIcon from "asserts/shop-now-icon.svg";

const StyledCard = styled.div`
  .product-image {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
    }
    .product-tag {
      position: absolute;
      padding: 4px 12px;
      background-color: ${(props) =>
        props.tag === "hot" ? "#FF6F61" : "#1E2832"};
      top: 10%;
      left: 0;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;

      /* White */

      color: #ffffff;
    }
    .image-hover {
      width: 100%;
      padding: 18px 14px 18px 16.5px;
      background: #1e2832;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.35s ease;
      color: #ffffff;
      img {
        width: 20px;
        height: 19px;
      }
      box-sizing: border-box;
    }
    .image-hover-left {
      display: flex;
      flex-direction: row;
      gap: 25px;
    }
    .image-hover-right {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }
  .product-image:hover .image-hover {
    opacity: 1;
  }
  .hover-icon {
    width: 20px;
    height: 20px;
  }
`;

export const Card = ({ position, img, name, type, price, quantity, tag }) => {
  return (
    <StyledCard tag={tag}>
      <div className="product-image">
        <img src={img} />
        <div className="product-tag">{tag}</div>
        {position ? (
          <div className="image-hover">
            <div className="image-hover-left">{type}</div>
            <div className="image-hover-right">{quantity} Product</div>
          </div>
        ) : (
          <div className="image-hover">
            <div className="image-hover-left">
              <img src={HeartIcon} />
              <img src={SearchIcon} />
            </div>
            <div className="image-hover-right">
              <img src={ShopNowIcon} />
              <span>Shop Now</span>
            </div>
          </div>
        )}
      </div>

      {name && price && type && (
        <div className="product-info">
          <div className="product-name">{name}</div>
          <div className="product-type-and-price">
            <div className="product-type">{type}</div>
            <div className="product-price">{price}</div>
          </div>
        </div>
      )}
    </StyledCard>
  );
};
