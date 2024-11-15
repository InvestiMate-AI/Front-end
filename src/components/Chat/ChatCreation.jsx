import React, { useState, useContext } from "react";
import kospiCorpData from "../../assets/corps/KOSPI_list.json";
import { chosungIncludes } from "es-hangul";
import * as C from "../../styles/chat-creation.style";

import { createThread } from "../../apis/chat";
import { IoCaretDown } from "react-icons/io5";
import { ChatContext } from "../Chat/ChatContext";

const ChatCreation = ({ addChatToChatList }) => {
  const [corp, setCorp] = useState("");
  const [reportType, setReportType] = useState("사업보고서");
  const [year, setYear] = useState("2023");
  const [filteredCorps, setFilteredCorps] = useState([]);
  const [selectedCorp, setSelectedCorp] = useState(null);
  const [corpDropdownVisible, setCorpDropdownVisible] = useState(false);
  const [reportDropdownVisible, setReportDropdownVisible] = useState(false);
  const [yearDropdownVisible, setYearDropdownVisible] = useState(false);

  const { fetchChatList } = useContext(ChatContext);

  const reportTypes = {
    11011: "사업보고서",
    11012: "반기보고서",
    11013: "1분기보고서",
    11014: "3분기보고서",
  };

  const years = ["2024", "2023", "2022"];

  const handleCorpChange = (event) => {
    const value = event.target.value;
    setCorp(value);

    if (value) {
      let results;
      if (isNaN(value)) {
        // 입력값이 텍스트인 경우 (회사명 검색)
        results = kospiCorpData.filter(
          (corp) =>
            corp.회사명.includes(value) || chosungIncludes(corp.회사명, value)
        );
      } else {
        // 입력값이 숫자인 경우 (종목코드 검색)
        results = kospiCorpData.filter((corp) =>
          corp.종목코드.toString().includes(value)
        );
      }
      setFilteredCorps(results);
    } else {
      setFilteredCorps([]);
    }
  };

  const handleCorpItemClick = (corp) => {
    setSelectedCorp(corp);
    setCorp(`${corp.회사명} (${corp.종목코드})`);
    setFilteredCorps([]);
    setCorpDropdownVisible(!corpDropdownVisible);
  };

  const handleReportItemClick = (reportType) => {
    setReportType(reportType);
    setReportDropdownVisible(!reportDropdownVisible);
  };

  const handleYearItemClick = (year) => {
    setYear(year);
    setYearDropdownVisible(!yearDropdownVisible);
  };

  const handleClickCreateButton = async () => {
    if (!selectedCorp || !reportType || !year) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    try {
      console.log("123123123123");
      await createThread(year, selectedCorp.회사명, reportType);
      fetchChatList(); // 채팅 리스트 새로고침
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  return (
    <C.ChatCreationLayout>
      <C.ChatCreationContainer>
        <C.Heading>새 채팅 만들기</C.Heading>
        <C.SelectionContainer>
          <C.SelectionName>기업 선택</C.SelectionName>
          <C.SelectionButton
            onClick={() => setCorpDropdownVisible(!corpDropdownVisible)}
          >
            <span>
              {!selectedCorp ? "기업을 선택하세요" : selectedCorp.회사명}
            </span>
            <IoCaretDown />
          </C.SelectionButton>
          {corpDropdownVisible && (
            <C.CorpSearchContainer>
              <C.CorpSearchInput
                value={corp}
                onChange={handleCorpChange}
                placeholder="회사명/종목코드"
              />
              {filteredCorps.length > 0 && (
                <C.CorpSearchList>
                  {filteredCorps.map((corp) => (
                    <C.CorpSearchListItem
                      key={corp.종목코드}
                      onClick={() => handleCorpItemClick(corp)}
                    >
                      {corp.회사명} ({corp.종목코드})
                    </C.CorpSearchListItem>
                  ))}
                </C.CorpSearchList>
              )}
            </C.CorpSearchContainer>
          )}
        </C.SelectionContainer>
        <C.SelectionTypeContainer>
          <C.SelectionContainer>
            <C.SelectionName>보고서 유형</C.SelectionName>
            <C.SelectionButton
              onClick={() => setReportDropdownVisible(!reportDropdownVisible)}
            >
              <span>{reportType}</span>
              <IoCaretDown />
            </C.SelectionButton>
            {reportDropdownVisible && (
              <C.OtherList>
                {Object.entries(reportTypes).map(([code, name]) => (
                  <C.OtherListItem
                    key={code}
                    value={name}
                    onClick={() => handleReportItemClick(name)}
                  >
                    {name}
                  </C.OtherListItem>
                ))}
              </C.OtherList>
            )}
          </C.SelectionContainer>
          <C.SelectionContainer>
            <C.SelectionName>사업 연도</C.SelectionName>
            <C.SelectionButton
              onClick={() => setYearDropdownVisible(!yearDropdownVisible)}
            >
              <span>{year}</span>
              <IoCaretDown />
            </C.SelectionButton>
            {yearDropdownVisible && (
              <C.OtherList>
                {years.map((y) => (
                  <C.OtherListItem
                    value={y}
                    onClick={() => handleYearItemClick(y)}
                  >
                    {y}
                  </C.OtherListItem>
                ))}
              </C.OtherList>
            )}
          </C.SelectionContainer>
        </C.SelectionTypeContainer>
        <C.createChatButton onClick={handleClickCreateButton}>
          생성하기
        </C.createChatButton>
      </C.ChatCreationContainer>
    </C.ChatCreationLayout>
  );
};

export default ChatCreation;
