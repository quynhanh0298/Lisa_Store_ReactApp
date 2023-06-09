import React from "react";
import styled from "styled-components";
import SocialImage from "asserts/social-image.svg";
import ImageHoverIcon from "asserts/instagram-icon-image-hover.svg";

const StyledSocialMedia = styled.div`
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  background: #f0f0f0;
  padding-left: 300px;
  padding-right: 300px;
  .social-media-title {
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
  .list-image {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .social-account {
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Primary */

    color: #ff6f61;
  }
`;

const StyledSocialImageItem = styled.div`
  position: relative;
  .social-image {
    transition: all 1s;
  }
  &:hover .overlay {
    display: block;
    background: rgba(0, 0, 0, 0.3);
  }
  &:hover .social-image-hover {
    opacity: 1;
  }
  .social-image-hover {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    opacity: 0;
    transition: opacity 0.35s ease;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.5s ease;
  }
`;

const SocialImageItem = () => {
  return (
    <StyledSocialImageItem>
      <img src={SocialImage} className="social-image" />
      <div className="overlay"></div>
      <img src={ImageHoverIcon} className="social-image-hover" />
    </StyledSocialImageItem>
  );
};

export const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <div className="social-media-title">
        Follow products and discounts on Instagram
      </div>
      <div className="list-image">
        <SocialImageItem></SocialImageItem>
        <SocialImageItem></SocialImageItem>
        <SocialImageItem></SocialImageItem>
        <SocialImageItem></SocialImageItem>
        <SocialImageItem></SocialImageItem>
        <SocialImageItem></SocialImageItem>
      </div>
      <div className="social-account">@lisa.official</div>
    </StyledSocialMedia>
  );
};
