import styled from "styled-components";

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
    color 0.5s ease;

  &:hover {
    background-color: #fff5cd;
    color: black;
  }
`;
