import styled from "styled-components";
const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
`;
export const Button = ({
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  fontSize,
  borderRadius,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      boderColor={boderColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
Button.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  width: "128px",
  height: "46px",
  borderRadius: "40px",
  fontSize: 16,
};
