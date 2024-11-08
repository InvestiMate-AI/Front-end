import React, { useEffect, useState } from "react";
import * as S from "../../styles/sidebar.style";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const SimulationSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [toggleDisabled, setToggleDisabled] = useState(false);

  const toggleSidebar = () => {
    if (!toggleDisabled) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1450) {
        setIsOpen(false);
        setToggleDisabled(true); // 너비가 1450 이하일 때 버튼 숨기기
      } else {
        setToggleDisabled(false); // 너비가 1450 초과일 때 버튼 보이기
      }
    };

    // 초기 확인
    handleResize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 클린업 함수로 리사이즈 이벤트 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <S.SidebarLayout>
        <S.SidebarContainer isOpen={isOpen}>
          <S.MenuContainer>{/* <RecordFilter /> */}</S.MenuContainer>
        </S.SidebarContainer>
        {!toggleDisabled && ( // toggleDisabled가 false일 때만 버튼 렌더링
          <S.ToggleButton onClick={toggleSidebar}>
            {isOpen ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
          </S.ToggleButton>
        )}
      </S.SidebarLayout>
    </>
  );
};

export default SimulationSidebar;
