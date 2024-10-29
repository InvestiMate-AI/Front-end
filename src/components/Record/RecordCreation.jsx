import React, { useState, useEffect } from "react";
import * as RF from "../../styles/record-filter.style";
import * as RC from "../../styles/record-creation.style";
import { IoCaretDown } from "react-icons/io5";
import kospiCorpData from "../../assets/corps/KOSPI_list.json";
import { chosungIncludes } from "es-hangul";
import CustomDatePicker from "../CustomDatePicker";
import CustomSelect from "../CustomSelect";
import { postRecord } from "../../apis/record";

export default function RecordCreation() {
  const [corp, setCorp] = useState(null);
  const [date, setDate] = useState();
  const [volume, setVolume] = useState(null);
  const [tradeType, setTradeType] = useState("매수");
  const [corpDropdownVisible, setCorpDropdownVisible] = useState(false);
  const [selectedCorp, setSelectedCorp] = useState(null); // 선택된 회사-회사번호 객체
  const [filteredCorps, setFilteredCorps] = useState([]); // 검색 결과

  const tradeTypeOptions = [
    { value: "매수", label: "매수" },
    { value: "매도", label: "매도" },
  ];

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

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTradeTypeChange = (option) => {
    setTradeType(option.value);
  };

  const createRecord = async (record) => {
    const response = await postRecord(record);
    return response;
  };

  const handleClickCreationButton = () => {
    const data = {
      date: date,
      name: corp,
      volume: volume,
      type: tradeType,
    };

    const response = createRecord(data);
    return response;
  };

  return (
    <>
      <RC.RecordCreationLayout>
        <RC.ItemContainer>
          <RC.ItemHeading>회사</RC.ItemHeading>
          <RC.ItemPickerContainer>
            <RF.CorpSelectionContainer>
              <RF.SelectionButton
                onClick={() => setCorpDropdownVisible(!corpDropdownVisible)}
              >
                <span style={{ flexGrow: 1 }}>
                  {!selectedCorp ? "기업 선택" : selectedCorp.회사명}
                </span>
                <IoCaretDown style={{ flexShrink: 0 }} />
              </RF.SelectionButton>
              {corpDropdownVisible && (
                <RF.CorpSearchContainer>
                  <RF.CorpSearchInput
                    value={corp}
                    onChange={handleCorpChange}
                    placeholder="회사명/종목코드"
                  />
                  {filteredCorps.length > 0 && (
                    <RF.CorpSearchList>
                      {filteredCorps.map((corp) => (
                        <RF.CorpSearchListItem
                          key={corp.종목코드}
                          onClick={() => handleCorpItemClick(corp)}
                        >
                          {corp.회사명} ({corp.종목코드})
                        </RF.CorpSearchListItem>
                      ))}
                    </RF.CorpSearchList>
                  )}
                </RF.CorpSearchContainer>
              )}
            </RF.CorpSelectionContainer>
          </RC.ItemPickerContainer>
        </RC.ItemContainer>
        <RC.ItemContainer>
          <RC.ItemHeading>날짜</RC.ItemHeading>
          <RC.ItemPickerContainer>
            <CustomDatePicker selectedDate={date} onChange={handleDateChange} />
          </RC.ItemPickerContainer>
        </RC.ItemContainer>
        <RC.ItemContainer>
          <RC.ItemHeading>수량</RC.ItemHeading>
          <RC.ItemPickerContainer>
            <RC.VolumeInput type="number"></RC.VolumeInput>
          </RC.ItemPickerContainer>
        </RC.ItemContainer>
        <RC.ItemContainer>
          <RC.ItemHeading>매매유형</RC.ItemHeading>
          <CustomSelect
            options={tradeTypeOptions}
            onChange={handleTradeTypeChange}
            placeholder={tradeType}
          />
          <RC.ItemPickerContainer></RC.ItemPickerContainer>
        </RC.ItemContainer>
        <RC.ItemContainer>
          <RC.CreationButton>추가</RC.CreationButton>
        </RC.ItemContainer>
      </RC.RecordCreationLayout>
    </>
  );
}
