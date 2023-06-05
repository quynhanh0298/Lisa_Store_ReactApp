import React from "react";
import styled from "styled-components";
import PaymentIcons from "asserts/footer-payment-icons.svg";
import ScrollToTop from "asserts/scroll-to-top-icon.svg";
import FacebookIcon from "asserts/facebook-icon.svg";
import TwitterIcon from "asserts/twitter-icon.svg";
import LinkedInkIcon from "asserts/linkedin-icon.svg";
import InstagramIcon from "asserts/instagram-icon.svg";

const StyledFooter = styled.div`
  .footer-top {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
  .info-right {
    display: flex;
    flex-direction: row;
    flex: 2;
    justify-content: space-between;
  }
  .info-left {
    flex: 1;
  }
  .footer-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #1e2832;
    padding: 15px 0;
    align-items: center;
  }
  .lisa {
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;

    color: #000000;
  }
  .lorem {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: rgba(30, 40, 50, 0.75);
  }
  .social-media-icons {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
  .info-right-title {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
  .info-right-content {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    text-transform: capitalize;

    /* Black */

    color: #1e2832;
  }
  .lisa-inc {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-transform: capitalize;

    /* White */

    color: #ffffff;
  }
  .scroll-to-top {
    a {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      /* identical to box height */

      text-transform: capitalize;

      /* White */

      color: #ffffff;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-top">
        <div className="info-left">
          <div className="lisa">Lisa</div>
          <div className="lorem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ab.
            Perspiciatis itaque, rerum maxime deserunt repellat illo a autem
            ipsa beatae aut adipisci praesentium debitis accusantium aliquam
            ipsam et placeat?
          </div>
          <div className="social-media-icons">
            <img src={FacebookIcon} />
            <img src={TwitterIcon} />
            <img src={LinkedInkIcon} />
            <img src={InstagramIcon} />
          </div>
        </div>
        <div className="info-right">
          <div className="info-right-item">
            <div className="info-right-title">CATALOG</div>
            <div className="info-right-content">Necklaces</div>
            <div className="info-right-content">Hoodies</div>
            <div className="info-right-content">Jewelry Box</div>
            <div className="info-right-content">T-Shirt</div>
            <div className="info-right-content">Jacket</div>
          </div>
          <div className="info-right-item">
            <div className="info-right-title">ABOUT US</div>
            <div className="info-right-content">Our Producers</div>
            <div className="info-right-content">Sitemap</div>
            <div className="info-right-content">FAQ</div>
            <div className="info-right-content">About Us</div>
            <div className="info-right-content">Terms & Conditions</div>
          </div>
          <div className="info-right-item">
            <div className="info-right-title">CUSTOMER SERVICES</div>
            <div className="info-right-content">Contact Us</div>
            <div className="info-right-content">Track Your Order</div>
            <div className="info-right-content">Product Care & Repair</div>
            <div className="info-right-content">Book an Appointment</div>
            <div className="info-right-content">Shipping & Returns</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="lisa-inc">&copy; 2023 LISA , Inc.</div>
        <div className="payment-methods">
          <img src={PaymentIcons} />
        </div>
        <div className="scroll-to-top">
          <a>Scroll To Top</a>
          <img src={ScrollToTop} />
        </div>
      </div>
    </StyledFooter>
  );
};
