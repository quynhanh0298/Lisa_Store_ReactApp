import React from "react";
import styled from "styled-components";
import SearchIcon from "asserts/header-search.svg";
import AccountIcon from "asserts/header-account-logo.svg";
import ShoppingIcon from "asserts/header-shopping-logo.svg";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f0f0f0;
  border-bottom: 1px solid #e3e3e3;
  padding: 30px 300px;
  .account-and-shopping {
    display: flex;
    flex-direction: row;
  }
  .store-logo {
    a {
      font-family: "AmstelvarAlpha";
      font-style: normal;
      font-weight: 400;
      font-size: 42px;
      line-height: 50px;

      /* Dark */

      color: #000000;
    }
  }
  .account-and-shopping {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
  .account {
    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      /* identical to box height */

      text-transform: capitalize;

      /* Black */

      color: #1e2832;
    }
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .shopping {
    display: flex;
    flex-direction: row;
    gap: 10px;
    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      /* identical to box height */

      text-transform: capitalize;

      /* Black */

      color: #1e2832;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="search">
        <img src={SearchIcon} />
      </div>
      <div className="store-logo">
        <a>Lisa Store</a>
      </div>
      <div className="account-and-shopping">
        <div className="account">
          <img src={AccountIcon} /> <span>Account</span>
        </div>
        <div className="shopping">
          <img src={ShoppingIcon} /> <span>Shopping</span>
        </div>
      </div>
    </StyledHeader>
  );
};
