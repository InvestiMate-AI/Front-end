import styled from "styled-components";
import themes from "./theme";

export const FeedbackCreationLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;

export const FeedbackCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: auto;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 1rem;
  background: ${themes.colors.gray_50};
  box-shadow: 0 0 4px gray;
`;

export const Heading = styled.h1`
  margin: 1rem;
  padding: 1rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const createFeedbackButton = styled.button`
  width: 100%;
  padding: 0.5rem 1.5rem;
  background-color: skyblue;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: rgb(211, 211, 211) 0px 0px 4px;

  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #fff5cd;
    color: black;
  }

  margin: 2.5rem 1rem 0 1rem;
`;
