import React, { useState, useEffect } from "react";
import * as S from "../../styles/simulation-creation.style";
import { IoCaretDown } from "react-icons/io5";
import kospiCorpData from "../../assets/corps/KOSPI_list.json";
import { chosungIncludes } from "es-hangul";
import CustomDatePicker from "../CustomDatePicker";
import { fetchAutoSimulationResult } from "../../apis/simulation";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import * as Sidebar from "../../styles/sidebar.style";
import CustomSelect from "../CustomSelect";

export default function SimulationAutoCreation({
  handleFetchSimulationReports,
}) {
  const [corp, setCorp] = useState(null);
  const [assetAmount, setAssetAmount] = useState(10000);
  const [splitRate, setSplitRate] = useState(0.1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [strategy, setStrategy] = useState("유유자적");

  // 회사 검색
  const [corpDropdownVisible, setCorpDropdownVisible] = useState(false);
  const [selectedCorp, setSelectedCorp] = useState(null); // 선택된 회사-회사번호 객체
  const [filteredCorps, setFilteredCorps] = useState([]); // 검색 결과

  const [displayAmount, setDisplayAmount] = useState("10,000"); // 콤마가 추가된 문자열
  const [displayRate, setDisplayRate] = useState("1"); // 표시용 백분율 (0 ~ 100)

  // 토글
  const [isOpen, setIsOpen] = useState(true);
  const [toggleDisabled, setToggleDisabled] = useState(false);

  const toggleSidebar = () => {
    if (!toggleDisabled) {
      setIsOpen(!isOpen);
    }
  };

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
    setCorp(`${corp.회사명}`);
    setFilteredCorps([]);
    setCorpDropdownVisible(!corpDropdownVisible);
  };

  const handleStartDateChange = (startDate) => {
    setStartDate(startDate);
  };

  const handleEndDateChange = (endDate) => {
    setEndDate(endDate);
  };

  const handleAssetAmountChange = (event) => {
    const inputAssetAmount = event.target.value.replace(/[^0-9]/g, ""); // 숫자 외 문자 제거
    const clampedAssetAmount = Math.max(
      0,
      Math.min(1000000000, Number(inputAssetAmount))
    );

    setAssetAmount(clampedAssetAmount); // 숫자로 상태 업데이트
    setDisplayAmount(clampedAssetAmount.toLocaleString()); // 세 자리마다 콤마가 들어간 문자열 설정
  };

  const handleSplitRateChange = (event) => {
    // 숫자와 소수점만 허용
    let value = event.target.value.replace(/[^0-9.]/g, "");

    // 값이 존재할 경우 소수점 세 자리까지 자르고, 0과 100 사이로 제한
    if (value) {
      const clampedValue = Math.min(100, Math.max(0, parseFloat(value)));
      const actualRate = (clampedValue / 100).toFixed(3); // 백분율에서 소수로 변환

      setSplitRate(actualRate); // 실제 값 저장
      setDisplayRate(clampedValue); // 표시용 백분율 설정
    } else {
      setSplitRate(0); // 값이 없을 때 초기화
      setDisplayRate(0);
    }
  };

  const strategyOptions = [
    { value: "유유자적", label: "유유자적" },
    { value: "진보적", label: "진보적" },
    { value: "산적", label: "산적" },
    { value: "보수적", label: "보수적" },
  ];

  const handleStrategyChange = (option) => {
    setStrategy(option.value);
  };

  const createAutoSimulation = async (submitData) => {
    const data = await fetchAutoSimulationResult(submitData);
    return data;
  };

  const handleClickCreationButton = async () => {
    if (
      !corp ||
      !assetAmount ||
      !splitRate ||
      !startDate ||
      !endDate ||
      !strategy
    ) {
      alert("모든 필드를 입력해주세요."); // 입력되지 않은 값이 있음을 알림
      return;
    }

    const data = {
      corp: corp,
      totalAsset: assetAmount,
      splitRate: splitRate,
      startDate: startDate,
      endDate: endDate,
      strategy: strategy,
    };

    const response = await createAutoSimulation(data);

    handleFetchSimulationReports(response);
    // if (response) {
    //   // 성공적으로 레코드가 생성되었을 때 모든 필드를 초기화
    //   // setCorp(null);
    //   // setStartDate(null);
    //   // setEndDate(null);
    //   // setSelectedCorp(null);
    //   // setFilteredCorps([]);
    //   // setCorpDropdownVisible(false);
    // }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerheight <= 1200) {
        setIsOpen(false);
        setToggleDisabled(true); // 너비가 1200 이하일 때 버튼 숨기기
      } else {
        setToggleDisabled(false); // 너비가 1200 초과일 때 버튼 보이기
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
      <S.SimulationCreationLayout isOpen={isOpen}>
        <S.SimulationCreationContainer>
          <S.RowContainer>
            <S.ItemContainer>
              <S.ItemHeading>종목</S.ItemHeading>
              <S.ItemPickerContainer>
                <S.CorpSelectionContainer>
                  <S.CorpSelectionButton
                    onClick={() => setCorpDropdownVisible(!corpDropdownVisible)}
                  >
                    <span style={{ flexGrow: 1 }}>
                      {!selectedCorp ? "기업 선택" : selectedCorp.회사명}
                    </span>
                    <IoCaretDown style={{ flexShrink: 0 }} />
                  </S.CorpSelectionButton>
                  {corpDropdownVisible && (
                    <S.CorpSearchContainer>
                      <S.CorpSearchInput
                        value={corp}
                        onChange={handleCorpChange}
                        placeholder="회사명/종목코드"
                      />
                      {filteredCorps.length > 0 && (
                        <S.CorpSearchList>
                          {filteredCorps.map((corp) => (
                            <S.CorpSearchListItem
                              key={corp.종목코드}
                              onClick={() => handleCorpItemClick(corp)}
                            >
                              {corp.회사명}
                            </S.CorpSearchListItem>
                          ))}
                        </S.CorpSearchList>
                      )}
                    </S.CorpSearchContainer>
                  )}
                </S.CorpSelectionContainer>
              </S.ItemPickerContainer>
            </S.ItemContainer>
            <S.ItemContainer>
              <S.ItemHeading>날짜</S.ItemHeading>
              <S.ItemPickerContainer>
                <CustomDatePicker
                  selectedDate={startDate}
                  onChange={handleStartDateChange}
                />
                <div style={{ margin: "0.5rem" }}>-</div>
                <CustomDatePicker
                  selectedDate={endDate}
                  onChange={handleEndDateChange}
                />
              </S.ItemPickerContainer>
            </S.ItemContainer>
          </S.RowContainer>
          <S.RowContainer>
            <S.ItemContainer>
              <S.ItemHeading>자본금</S.ItemHeading>
              <S.ItemPickerContainer>
                <S.InputContainer>
                  <S.AssetAmountInput
                    type="text"
                    value={displayAmount || ""}
                    onChange={handleAssetAmountChange}
                  />
                  <div>{"원"}</div>
                </S.InputContainer>
              </S.ItemPickerContainer>
            </S.ItemContainer>
            <S.ItemContainer>
              <S.ItemHeading>분할 비율</S.ItemHeading>
              <S.ItemPickerContainer>
                <S.InputContainer>
                  <S.SplitRateInput
                    type="text"
                    value={`${displayRate}`} // 백분율로 표시
                    onChange={handleSplitRateChange}
                  ></S.SplitRateInput>
                  <div>{"%"}</div>
                </S.InputContainer>
              </S.ItemPickerContainer>
            </S.ItemContainer>
          </S.RowContainer>
          <S.RowContainer>
            <S.ItemContainer>
              <S.ItemHeading>투자 성향</S.ItemHeading>
              <S.ItemPickerContainer>
                <CustomSelect
                  options={strategyOptions}
                  onChange={handleStrategyChange}
                  placeholder={strategy}
                />
              </S.ItemPickerContainer>
            </S.ItemContainer>
          </S.RowContainer>
          <S.RowContainer>
            <S.ItemContainer>
              <S.CreationButton onClick={handleClickCreationButton}>
                생성하기
              </S.CreationButton>
            </S.ItemContainer>
          </S.RowContainer>
        </S.SimulationCreationContainer>
      </S.SimulationCreationLayout>
      {!toggleDisabled && ( // toggleDisabled가 false일 때만 버튼 렌더링
        <Sidebar.ToggleButton onClick={toggleSidebar}>
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </Sidebar.ToggleButton>
      )}
    </>
  );
}
