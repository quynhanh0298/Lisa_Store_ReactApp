import React from "react";
import styled from "styled-components";
import { Card } from "components/common/Card";
import { Button } from "components/common/Button";

const StyledProductsList = styled.div`
  padding-left: 300px;
  padding-right: 300px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  .menu-and-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .menu-items {
      display: flex;
      flex-direction: row;
      gap: 40px;
    }
  }
  .products-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ProductsList = ({ title, buttonType, numberOfRow }) => {
  return (
    <StyledProductsList>
      <div className="product-list-title">{title}</div>
      <div className="menu-and-button">
        <div className="menu">
          <div className="menu-items">
            <a>All Products</a>
            <a>T-Shirt</a>
            <a>Hoodies</a>
            <a>Jacket</a>
          </div>
        </div>
        <Button></Button>
      </div>
      <div className="products-list"></div>
    </StyledProductsList>
  );
};
