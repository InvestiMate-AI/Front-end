import React, { useEffect, useState } from "react";
import * as S from "../../styles/sidebar.style";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import RecordFilter from "./RecordFilter";

const RecordSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log();
  });

  return (
    <>
      <S.SidebarLayout>
        <S.SidebarContainer isOpen={isOpen}>
          <S.MenuContainer>
            <RecordFilter />
          </S.MenuContainer>
        </S.SidebarContainer>
        <S.ToggleButton onClick={toggleSidebar}>
          {isOpen ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
        </S.ToggleButton>
      </S.SidebarLayout>
    </>
  );
};

export default RecordSidebar;
