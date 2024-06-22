import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

const HeadingContainer = styled.div`
  display: flex;
`;

export function Section1({ children }) {
  return (
    <>
      <SectionContainer>
        <HeadingContainer>{children}</HeadingContainer>
      </SectionContainer>
    </>
  );
}
