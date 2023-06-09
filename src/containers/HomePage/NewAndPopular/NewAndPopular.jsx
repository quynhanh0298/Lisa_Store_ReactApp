import React from "react";
import styled from "styled-components";
import { Card } from "components/common/Card";
import Image from "asserts/product-image-1.svg";

const StyledNewAndPopular = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;
  padding-left: 300px;
  padding-right: 300px;
  .new-and-popular-left {
    flex: 1;
  }
  .new-and-popular-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    gap: 25px;
  }
  .new-and-popular-right-top,
  .new-and-popular-right-bottom {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
  }
`;

export const NewAndPopular = () => {
  return (
    <StyledNewAndPopular>
      <div className="new-and-popular-left">
        <Card tag="sale" img={Image}></Card>
      </div>
      <div className="new-and-popular-right">
        <div className="new-and-popular-right-top">
          <div>
            <Card tag="hot" img={Image} position="yes"></Card>
          </div>
          <div>
            <Card img={Image} position="yes"></Card>
          </div>
        </div>
        <div className="new-and-popular-right-bottom">
          <div>
            <Card img={Image} position="yes"></Card>
          </div>
          <div>
            <Card img={Image} position="yes"></Card>
          </div>
        </div>
      </div>
    </StyledNewAndPopular>
  );
};
