import React, { useState, useEffect, useRef } from "react";
import { getRecords, deleteRecord } from "../../apis/record";
import * as R from "../../styles/record-table.style";
import { IoMdMore } from "react-icons/io";

export default function RecordTable() {
  // 예시 데이터
  const [data, setData] = useState([]);

  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "ascending",
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [currentRecordId, setCurrentRecordId] = useState(null);
  const popupRef = useRef(null);

  const getData = async () => {
    try {
      // const response = await fetch("/recordData.json");
      const response = await getRecords();
      setData(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  const handleButtonClick = (event, recordId) => {
    // 마우스 위치에 팝업을 띄우기 위한 기본 위치
    let popupX = event.clientX;
    let popupY = event.clientY;

    const popupWidth = 100; // 예상 팝업 너비
    const popupHeight = 100; // 예상 팝업 높이

    // 화면 너비를 초과하면 왼쪽으로 이동
    if (popupX + popupWidth > window.innerWidth) {
      popupX = window.innerWidth - popupWidth - 10; // 10px 여유를 둠
    }

    // 화면 높이를 초과하면 위로 이동
    if (popupY + popupHeight > window.innerHeight) {
      popupY = window.innerHeight - popupHeight - 10; // 10px 여유를 둠
    }

    // 팝업 위치 업데이트
    setPopupPosition({ x: popupX, y: popupY });
    setPopupVisible((prev) => !prev);
    setCurrentRecordId(recordId);
  };

  // 외부 클릭 감지
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(false);
    }
  };

  // 타임스탬프를 날짜 형식으로 변환하는 함수
  const convertTimestampToDate = (timestamp) => {
    if (Object.prototype.toString.call(timestamp) !== "[object Date]") {
      return timestamp;
    }
    const date = new Date(parseInt(timestamp));
    return date.toISOString().split("T")[0]; // 'YYYY-MM-DD' 형식으로 변환
  };

  // 정렬 함수
  const sortData = (key) => {
    let sortedData = [...data];
    const direction =
      sortConfig.direction === "ascending" ? "descending" : "ascending";

    sortedData.sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  const handleClickDeleteButton = () => {
    setPopupVisible(false);
    deleteRecord(currentRecordId);
  };

  useEffect(() => {
    getData();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <R.RecordTableLayout>
      <R.RecordTableContainer>
        <R.TableHeader>
          <R.TableHeaderRow>
            <R.TableHeaderCell>번호</R.TableHeaderCell>
            <R.TableHeaderCell onClick={() => sortData("name")}>
              종목
            </R.TableHeaderCell>
            <R.TableHeaderCell onClick={() => sortData("date")}>
              날짜
            </R.TableHeaderCell>
            <R.TableHeaderCell onClick={() => sortData("volume")}>
              수량
            </R.TableHeaderCell>
            <R.TableHeaderCell onClick={() => sortData("type")}>
              매매유형
            </R.TableHeaderCell>
            <R.TableHeaderCell />
          </R.TableHeaderRow>
        </R.TableHeader>
        <R.TableBody>
          {data.map((item, index) => (
            <R.TableBodyRow key={index}>
              <R.TableBodyCell>{index + 1}</R.TableBodyCell>
              <R.TableBodyCell>{item.name}</R.TableBodyCell>
              <R.TableBodyCell>
                {convertTimestampToDate(item.date)}
              </R.TableBodyCell>
              <R.TableBodyCell>{item.volume}</R.TableBodyCell>
              <R.TableBodyCell>{item.type}</R.TableBodyCell>
              <R.TableBodyCell className="button-cell">
                <R.sideButton
                  onClick={(event) =>
                    handleButtonClick(event, item.stockRecordId)
                  }
                >
                  <IoMdMore
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      minWidth: "1.5rem",
                      minHeight: "1.5rem",
                      color: "inherit",
                    }}
                  />
                </R.sideButton>
              </R.TableBodyCell>
            </R.TableBodyRow>
          ))}
        </R.TableBody>
        {popupVisible && (
          <div
            ref={popupRef}
            style={{
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              top: popupPosition.y,
              left: popupPosition.x,
              backgroundColor: "white",
              border: "1px solid white",
              borderRadius: "1rem",
              padding: "1rem",
              zIndex: 1000,
              boxShadow: "0 0 4px #d3d3d3",
            }}
          >
            <R.PopUpMenuButton color="gray" hoverColor="black">
              수정
            </R.PopUpMenuButton>
            <R.PopUpMenuButton
              color="#FF000050"
              hoverColor="#FF0000FF"
              style={{ margin: "0" }}
              onClick={handleClickDeleteButton}
            >
              삭제
            </R.PopUpMenuButton>
          </div>
        )}
      </R.RecordTableContainer>
    </R.RecordTableLayout>
  );
}
