import styled, { keyframes } from "styled-components";

// 나타나는 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomePageLayout = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StartButton = styled.button`
  background: black;
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  border: 1px;
  border-radius: 50px;
  margin: 1rem;
  padding: 1.5rem 2.5rem;
  cursor: pointer;
  transition:
    background-color 0.5s ease,
    color 0.5s ease,
    box-shadow 0.3s ease;

  animation: ${fadeIn} 1.5s ease forwards;

  &:hover {
    background-color: #fff5cd;
    color: black;
    box-shadow:
      0 0 10px #db8b0350,
      0 0 20px #db8b0350,
      0 0 30px #db8b0350;
  }

  /* 기본 빛나는 효과 */
  box-shadow:
    0 0 10px #db8b033c,
    0 0 20px #db8b033c,
    0 0 30px #db8b033c;
`;
