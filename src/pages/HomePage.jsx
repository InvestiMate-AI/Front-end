import React, { useState, useEffect } from "react";
import * as H from "../styles/home.style";
import DefaultLayout from "../components/Layout/DefaultLayout";

import styled, { keyframes } from "styled-components";

function HomePage() {
  return (
    <>
      <DefaultLayout>
        <H.HomePageLayout>
          <Typing
            textLines={["Invest Smarter,", "Powered by AI."]}
            typingSpeed={100}
          />
          <H.StartButton>Get Started</H.StartButton>
        </H.HomePageLayout>
      </DefaultLayout>
    </>
  );
}

// 타이핑 텍스트를 담을 컨테이너
const TypingContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  justify-content: center;
`;

// 개별 글자 스타일
const Letter = styled.span`
  color: ${(props) => (props.highlight ? "#DB8B03" : "black")};
  transition: color 0.3s ease;
  font-size: 8rem;
  line-height: 8rem;
  user-select: none;
  font-weight: 500;
  letter-spacing: -0.25rem;
`;

// 타이핑 컴포넌트
const Typing = ({ textLines, typingSpeed = 300 }) => {
  const [displayedText, setDisplayedText] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hideCursor, setHideCursor] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null); // highlight 상태 관리

  useEffect(() => {
    // 타이핑 애니메이션 시작
    if (currentIndex < textLines.join("").length) {
      const timer = setTimeout(() => {
        const fullText = textLines.join("");
        setDisplayedText((prev) => [...prev, fullText[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
        setHighlightedIndex(currentIndex); // 현재 글자에 highlight 적용

        // 마지막 글자일 경우 `typingSpeed` 후 highlight 제거
        if (currentIndex === fullText.length - 1) {
          setTimeout(() => setHighlightedIndex(null), typingSpeed);
        }
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else {
      // 타이핑 완료 후 커서 숨기기
      setTimeout(() => setHideCursor(true), 500);
    }
  }, [currentIndex, textLines, typingSpeed]);

  return (
    <TypingContainer style={{ minHeight: "20rem" }}>
      {textLines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {displayedText
            .slice(
              textLines.slice(0, lineIndex).join("").length,
              textLines.slice(0, lineIndex + 1).join("").length
            )
            .map((letter, index) => (
              <Letter
                key={index}
                highlight={
                  textLines.slice(0, lineIndex).join("").length + index ===
                  highlightedIndex
                }
              >
                {letter}
              </Letter>
            ))}
          {/* <Cursor hidden={hideCursor} /> */}
        </div>
      ))}
    </TypingContainer>
  );
};

export default HomePage;
