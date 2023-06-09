import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";
import CollectionImage from "asserts/see-collection-background.svg";
import CollectionName from "asserts/collection-name.svg";
import CollectionNameBackground from "asserts/collection-name-background.svg";
const StyleCollection = styled.div`
  position: relative;
  .collection-image {
    width: 100%;
  }
  .collection-content {
    width: 26.25%;
    display: flex;
    flex-direction: column;
    gap: 55px;
    margin-bottom: 93px;
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 53%;
    .collection-description {
      font-weight: 400;
      font-size: 26px;
      line-height: 40px;
      /* or 154% */

      text-transform: capitalize;

      /* Primary */

      color: #ff6f61;
    }
    .collection-name {
      width: 37.89%;
    }
  }
  .collection-name-background {
    position: absolute;
    z-index: 2;
    top: 10%;
    right: 0;
  }
`;

const StyledButton = styled(Button)`
  transition: 0.3s;
  &:hover {
    background: #ff6f61;
  }
`;

export const Collection = () => {
  return (
    <StyleCollection>
      <img className="collection-image" src={CollectionImage} />
      <img
        className="collection-name-background"
        src={CollectionNameBackground}
      />
      <div className="collection-content">
        <img className="collection-name" src={CollectionName} />
        <div className="collection-description">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </div>
        <StyledButton
          width="237px"
          height="72px"
          borderRadius={0}
          textColor="#1E2832"
          fontSize="29px"
          bgColor="#FFFFFF"
        >
          See Collection
        </StyledButton>
      </div>
    </StyleCollection>
  );
};
