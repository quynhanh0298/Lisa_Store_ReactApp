import React from "react";
import styled from "styled-components";

const StyledProductImage = styled.div`
  position: relative;
  .image {
    position: absolute;
  }
  .tag {
    position: absolute;
    padding: 5px 10px;
    text-transform: uppercase;
  }
`;

export const ProductImage = ({ image, tagName }) => {
  return (
    <StyledProductImage>
      <img className="image" src={image} />
      <div className="tag">{tagName}</div>
    </StyledProductImage>
  );
};
