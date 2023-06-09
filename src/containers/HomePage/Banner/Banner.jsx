import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";
import BannerImage from "asserts/banner-img.svg";
import BannerImageBorder from "asserts/banner-img-border.svg";
import ShopNowIcon from "asserts/shop-now-icon.svg";

const StyledBanner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  background: #f0f0f0;
  padding-top: 114px;
  padding-bottom: 80px;
  padding-left: 300px;
  padding-right: 300px;
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
`;

const StyledButton = styled(Button)`
  transition: 0.3s;
  &:hover {
    background: #ff6f61;
  }
`;

export const Banner = () => {
  return (
    <StyledBanner>
      <div className="banner-left">
        <div className="collections">Collections</div>
        <div className="banner-content">
          You Can Explore Ans shop many differnt collection from various barands
          here.
        </div>
        <StyledButton
          width="223px"
          height="72px"
          textColor="#FFFFFF"
          bgColor="#1E2832"
          fontSize="29px"
          borderRadius={0}
        >
          <img src={ShopNowIcon} /> <span>Shop Now</span>
        </StyledButton>
      </div>
      <div className="banner-right">
        <img className="banner-img" src={BannerImage} />
        {/* <img className="banner-border" src={BannerImageBorder} /> */}
      </div>
    </StyledBanner>
  );
};
