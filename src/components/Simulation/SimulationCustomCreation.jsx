import React, { useState, useEffect } from "react";
import * as S from "../../styles/simulation-creation.style";
import { IoCaretDown } from "react-icons/io5";
import kospiCorpData from "../../assets/corps/KOSPI_list.json";
import tradeOptionData from "../../assets/simulation_option_list.json";
import { chosungIncludes } from "es-hangul";
import CustomDatePicker from "../CustomDatePicker";
import { fetchCustomSimulationResult } from "../../apis/simulation";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import * as Sidebar from "../../styles/sidebar.style";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";

export default function SimulationCustomCreation({
  handleFetchSimulationReports,
}) {
  const [corp, setCorp] = useState(null);
  const [assetAmount, setAssetAmount] = useState(10000);
  const [splitRate, setSplitRate] = useState(0.1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [buyOptions, setBuyOptions] = useState([
    [
      {
        value: null,
        dropdownVisible: false,
        selectedOption: null,
        searchQuery: "",
        filteredOptions: Object.entries(tradeOptionData).map(
          ([key, description]) => ({
            key,
            description,
          })
        ),
      },
    ],
  ]);

  const [displayAmount, setDisplayAmount] = useState("10,000"); // 콤마가 추가된 문자열
  const [displayRate, setDisplayRate] = useState("1"); // 표시용 백분율 (0 ~ 100)

  const [sellOptions, setSellOptions] = useState([
    [
      {
        value: null,
        dropdownVisible: false,
        selectedOption: null,
        searchQuery: "",
        filteredOptions: Object.entries(tradeOptionData).map(
          ([key, description]) => ({
            key,
            description,
          })
        ),
      },
    ],
  ]);

  // 회사 검색
  const [corpDropdownVisible, setCorpDropdownVisible] = useState(false);
  const [selectedCorp, setSelectedCorp] = useState(null); // 선택된 회사-회사번호 객체
  const [filteredCorps, setFilteredCorps] = useState([]); // 검색 결과

  // 토글
  const [isOpen, setIsOpen] = useState(true);
  const [toggleDisabled, setToggleDisabled] = useState(false);

  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState(null);

  const handleMouseEnter = (e, description) => {
    const { clientX: x, clientY: y } = e;
    setTooltipPosition({ x, y });
    setTooltipContent(description);
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

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

  // 상태 업데이트 헬퍼 함수
  const updateOptions = (type, updater) => {
    if (type === "buy") {
      setBuyOptions((prevOptions) => updater(prevOptions));
    } else {
      setSellOptions((prevOptions) => updater(prevOptions));
    }
  };

  // 드롭다운 열기/닫기 상태 토글
  const toggleDropdown = (type, rowIndex, colIndex) => {
    updateOptions(type, (prevOptions) =>
      prevOptions.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((cell, cIndex) =>
              cIndex === colIndex
                ? { ...cell, dropdownVisible: !cell.dropdownVisible }
                : cell
            )
          : row
      )
    );
  };

  // 검색 쿼리 업데이트 및 검색 결과 업데이트
  const updateSearchQuery = (type, rowIndex, colIndex, query) => {
    updateOptions(type, (prevOptions) =>
      prevOptions.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((cell, cIndex) =>
              cIndex === colIndex ? { ...cell, searchQuery: query } : cell
            )
          : row
      )
    );

    // 필터링된 옵션 업데이트
    const filteredOptions = Object.entries(tradeOptionData)
      .filter(
        ([key, description]) =>
          key.includes(query) || description.includes(query)
      )
      .map(([key, description]) => ({ key, description }));

    updateFilteredOptions(type, rowIndex, colIndex, filteredOptions);
  };

  // 필터링된 옵션 업데이트 함수
  const updateFilteredOptions = (type, rowIndex, colIndex, options) => {
    updateOptions(type, (prevOptions) =>
      prevOptions.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((cell, cIndex) =>
              cIndex === colIndex ? { ...cell, filteredOptions: options } : cell
            )
          : row
      )
    );
  };

  // 옵션 선택 함수
  const selectOption = (type, rowIndex, colIndex, option) => {
    updateOptions(type, (prevOptions) =>
      prevOptions.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((cell, cIndex) =>
              cIndex === colIndex
                ? {
                    ...cell,
                    value: option.key,
                    selectedOption: option,
                    dropdownVisible: false,
                    searchQuery: "",
                  }
                : cell
            )
          : row
      )
    );

    setTooltipContent(null);
  };

  // 행 추가 함수
  const addRowTradeOption = (type) => {
    const newRow = [
      {
        value: null,
        dropdownVisible: false,
        selectedOption: null,
        searchQuery: "",
        filteredOptions: Object.entries(tradeOptionData).map(
          ([key, description]) => ({
            key,
            description,
          })
        ),
      },
    ];
    updateOptions(type, (prevOptions) => [...prevOptions, newRow]);
  };

  // 셀 추가 함수
  const addCellTradeOption = (type, rowIndex) => {
    const newCell = {
      value: null,
      dropdownVisible: false,
      selectedOption: null,
      searchQuery: "",
      filteredOptions: Object.entries(tradeOptionData).map(
        ([key, description]) => ({
          key,
          description,
        })
      ),
    };
    updateOptions(type, (prevOptions) =>
      prevOptions.map((row, rIndex) =>
        rIndex === rowIndex ? [...row, newCell] : row
      )
    );
  };

  // 행 삭제 함수
  const deleteRowTradeOption = (type, rowIndex) => {
    updateOptions(type, (prevOptions) =>
      prevOptions.filter((_, index) => index !== rowIndex)
    );
  };

  // 셀 삭제 함수
  const deleteCellTradeOption = (type, rowIndex, colIndex) => {
    updateOptions(type, (prevOptions) =>
      prevOptions.map((row, rIndex) =>
        rIndex === rowIndex ? row.filter((_, i) => i !== colIndex) : row
      )
    );
  };

  const handleStartDateChange = (startDate) => {
    setStartDate(startDate);
  };

  const handleEndDateChange = (endDate) => {
    setEndDate(endDate);
  };

  const createUserSimulation = async (submitData) => {
    const data = await fetchCustomSimulationResult(submitData);
    return data;
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

  const handleClickCreationButton = async () => {
    // buyOptions와 sellOptions의 값을 변환
    const formatOptions = (options) =>
      options
        .map(
          (row) =>
            row
              .filter((cell) => cell.value !== null && cell.value !== undefined) // null 또는 undefined 제거
              .map((cell) => cell.value) // value 값만 남김
        )
        .filter((row) => row.length > 0); // 빈 배열 제거

    const formattedBuyOptions = formatOptions(buyOptions);
    const formattedSellOptions = formatOptions(sellOptions);

    if (
      !corp ||
      !startDate ||
      !endDate ||
      formattedBuyOptions.length === 0 ||
      formattedSellOptions.length === 0
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
      buyOption: formattedBuyOptions,
      sellOption: formattedSellOptions,
    };

    const response = await createUserSimulation(data);

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
    console.log(sellOptions);

    // 클린업 함수로 리사이즈 이벤트 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sellOptions]);

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
            <S.TradeOptionsContainer>
              <S.TradeOptionsHeader>매수 조건</S.TradeOptionsHeader>
              {buyOptions.map((row, rowIndex) => (
                <S.TradeOptionRow key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <S.TradeOptionCellSelectionContainer key={colIndex}>
                      <S.TradeOptionCellSelectionButton
                        onClick={() =>
                          toggleDropdown("buy", rowIndex, colIndex)
                        }
                      >
                        <span style={{ flexGrow: 1 }}>
                          {!cell?.selectedOption
                            ? "조건 선택"
                            : cell.selectedOption.key}
                        </span>
                        {row.length > 1 ? (
                          <S.CloseButton
                            onClick={() =>
                              deleteCellTradeOption("buy", rowIndex, colIndex)
                            }
                          >
                            <IoCloseOutline />
                          </S.CloseButton>
                        ) : (
                          <></>
                        )}
                      </S.TradeOptionCellSelectionButton>
                      {cell.dropdownVisible && (
                        <S.TradeOptionCellSearchContainer>
                          <S.TradeOptionCellSearchInput
                            value={cell.searchQuery}
                            onChange={(e) =>
                              updateSearchQuery(
                                "buy",
                                rowIndex,
                                colIndex,
                                e.target.value
                              )
                            }
                            placeholder="조건명"
                          />
                          {cell.filteredOptions.length > 0 && (
                            <S.TradeOptionCellSearchList>
                              {cell.filteredOptions.map((option) => (
                                <S.TradeOptionCellSearchListItem
                                  key={option.key}
                                  onMouseEnter={(e) =>
                                    handleMouseEnter(e, option.description)
                                  }
                                  onMouseLeave={handleMouseLeave}
                                  onClick={() =>
                                    selectOption(
                                      "buy",
                                      rowIndex,
                                      colIndex,
                                      option
                                    )
                                  }
                                >
                                  {option.key}
                                </S.TradeOptionCellSearchListItem>
                              ))}
                            </S.TradeOptionCellSearchList>
                          )}
                        </S.TradeOptionCellSearchContainer>
                      )}
                    </S.TradeOptionCellSelectionContainer>
                  ))}
                  {row.length < 3 && (
                    <S.TradeOptionCellAddButton
                      onClick={() => addCellTradeOption("buy", rowIndex)}
                    >
                      <IoAddOutline color="gray" />
                    </S.TradeOptionCellAddButton>
                  )}
                  {buyOptions.length > 1 ? (
                    <S.CloseButton
                      onClick={() => deleteRowTradeOption("buy", rowIndex)}
                    >
                      <IoCloseOutline />
                    </S.CloseButton>
                  ) : (
                    <></>
                  )}
                </S.TradeOptionRow>
              ))}
              <S.TradeOptionRowAddButton
                onClick={() => addRowTradeOption("buy")}
              >
                <IoAddOutline color="gray" />
              </S.TradeOptionRowAddButton>
            </S.TradeOptionsContainer>
          </S.RowContainer>
          <S.RowContainer>
            <S.TradeOptionsContainer>
              <S.TradeOptionsHeader>매도 조건</S.TradeOptionsHeader>
              {sellOptions.map((row, rowIndex) => (
                <S.TradeOptionRow key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <S.TradeOptionCellSelectionContainer key={colIndex}>
                      <S.TradeOptionCellSelectionButton
                        onClick={() =>
                          toggleDropdown("sell", rowIndex, colIndex)
                        }
                      >
                        <span style={{ flexGrow: 1 }}>
                          {!cell.selectedOption
                            ? "조건 선택"
                            : cell.selectedOption.key}
                        </span>
                        {row.length > 1 ? (
                          <S.CloseButton
                            onClick={() =>
                              deleteCellTradeOption("sell", rowIndex, colIndex)
                            }
                          >
                            <IoCloseOutline />
                          </S.CloseButton>
                        ) : (
                          <></>
                        )}
                      </S.TradeOptionCellSelectionButton>
                      {cell.dropdownVisible && (
                        <S.TradeOptionCellSearchContainer>
                          <S.TradeOptionCellSearchInput
                            value={cell.searchQuery}
                            onChange={(e) => {
                              updateSearchQuery(
                                "sell",
                                rowIndex,
                                colIndex,
                                e.target.value
                              );
                            }}
                            placeholder="조건명"
                          />

                          {cell.filteredOptions.length > 0 ? (
                            <S.TradeOptionCellSearchList>
                              {cell.filteredOptions.map((option) => (
                                <S.TradeOptionCellSearchListItem
                                  key={option.key}
                                  onMouseEnter={(e) =>
                                    handleMouseEnter(e, option.description)
                                  }
                                  onMouseLeave={handleMouseLeave}
                                  onClick={() =>
                                    selectOption(
                                      "sell",
                                      rowIndex,
                                      colIndex,
                                      option
                                    )
                                  }
                                >
                                  {option.key}
                                </S.TradeOptionCellSearchListItem>
                              ))}
                            </S.TradeOptionCellSearchList>
                          ) : (
                            <></>
                          )}
                        </S.TradeOptionCellSearchContainer>
                      )}
                    </S.TradeOptionCellSelectionContainer>
                  ))}
                  {row.length < 3 && (
                    <S.TradeOptionCellAddButton
                      onClick={() => addCellTradeOption("sell", rowIndex)}
                    >
                      <IoAddOutline color="gray" />
                    </S.TradeOptionCellAddButton>
                  )}
                  {sellOptions.length > 1 ? (
                    <S.CloseButton
                      onClick={() => deleteRowTradeOption("sell", rowIndex)}
                    >
                      <IoCloseOutline />
                    </S.CloseButton>
                  ) : (
                    <></>
                  )}
                </S.TradeOptionRow>
              ))}
              {tooltipContent && (
                <S.Tooltip
                  style={{
                    top: tooltipPosition.y + 10,
                    left: tooltipPosition.x + 10,
                  }}
                >
                  {tooltipContent}
                </S.Tooltip>
              )}
              <S.TradeOptionRowAddButton
                onClick={() => addRowTradeOption("sell")}
              >
                <IoAddOutline color="gray" />
              </S.TradeOptionRowAddButton>
            </S.TradeOptionsContainer>
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
