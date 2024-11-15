import styled, { keyframes } from "styled-components";

// Keyframes for the spin animation
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Styled component with dynamic size
const Spinner = styled.div`
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    display: block;
    height: ${(props) => props.size || "50px"}; // Default size: 50px
    width: ${(props) => props.size || "50px"};
    animation: ${spin} 0.8s infinite linear;
    border: ${(props) => (props.size ? parseInt(props.size) / 8 : 6)}px solid
      #0071c5; // Border size based on the spinner size
    border-left-color: #ffffff;
    border-radius: 100%;
  }
`;

export default Spinner;
