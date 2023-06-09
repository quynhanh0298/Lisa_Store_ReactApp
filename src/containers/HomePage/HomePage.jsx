import React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { Brands } from "./Brands";
import { NewAndPopular } from "./NewAndPopular";
import { ProductsList } from "./ProductsList";
import { Collection } from "./Collection";
import { SocialMedia } from "./SocialMedia";
const StyledHomePage = styled.div`
  .new-products-text {
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Banner></Banner>
      <Brands></Brands>
      <NewAndPopular></NewAndPopular>
      <ProductsList></ProductsList>
      <Collection></Collection>
      <ProductsList></ProductsList>
      <SocialMedia></SocialMedia>
    </StyledHomePage>
  );
};

export default HomePage;
