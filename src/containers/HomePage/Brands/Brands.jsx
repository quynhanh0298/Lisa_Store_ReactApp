import React from "react";
import styled from "styled-components";
import Brand1 from "asserts/brand-1.svg";
import Brand2 from "asserts/brand-2.svg";
import Brand3 from "asserts/brand-3.svg";
import Brand4 from "asserts/brand-4.svg";
import Brand5 from "asserts/brand-5.svg";

const StyledBrands = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 90px 300px;
`;

export const Brands = () => {
  return (
    <StyledBrands>
      <img src={Brand1} />
      <img src={Brand2} />
      <img src={Brand3} />
      <img src={Brand4} />
      <img src={Brand5} />
    </StyledBrands>
  );
};
