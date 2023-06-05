import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";
import BannerImage from "asserts/banner-img.svg";
import BannerImageBorder from "asserts/banner-img-border.svg";
import Brand1 from "asserts/brand-1.svg";
import Brand2 from "asserts/brand-2.svg";
import Brand3 from "asserts/brand-3.svg";
import Brand4 from "asserts/brand-4.svg";
import Brand5 from "asserts/brand-5.svg";
const StyledHomePage = styled.div`
  .banner {
    display: flex;
    flex-direction: row;
    gap: 100px;
    background: #f0f0f0;
    padding: 80px;
  }
  .collections {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 74px;
    line-height: 55px;
    /* identical to box height, or 74% */

    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
  .banner-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    flex: 1;
  }
  .banner-right {
    /* position: relative; */
    flex: 1;
  }
  .banner-content {
    /* position: absolute; */
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    /* or 183% */

    text-transform: capitalize;

    /* Dark */

    color: #000000;
    flex-wrap: wrap;
  }
  .banner-img {
    /* position: absolute; */
    border-radius: 160px 0px;
  }
  .banner-content {
    width: 100%;
  }
  .brands {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 90px;
  }
  .explore-new-style-text {
    text-transform: uppercase;
    transform: rotate(-90deg);
  }
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="banner">
        <div className="banner-left">
          <div className="collections">Collections</div>
          <div className="banner-content">
            You Can Explore Ans shop many differnt collection from various
            barands here.
          </div>
          <Button></Button>
        </div>
        <div className="banner-right">
          <img className="banner-img" src={BannerImage} />
          {/* <img className="banner-border" src={BannerImageBorder} /> */}
        </div>
      </div>
      <div className="brands">
        <img src={Brand1} />
        <img src={Brand2} />
        <img src={Brand3} />
        <img src={Brand4} />
        <img src={Brand5} />
      </div>
      <div className="explore-new-style">
        <div className="explore-new-style-text">
          Explore new and popular styles
        </div>
        <div className="explore-new-style-left"></div>
        <div className="explore-new-style-right">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
