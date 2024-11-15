import React, { useState } from "react";
import { IoAlertCircle } from "react-icons/io5";

export default function RenderTable({ originalTableData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const parseUnicodeJson = (data) => {
    try {
      const decodedData = data.replace(/\\u[\dA-F]{4}/gi, (match) => {
        return String.fromCharCode(parseInt(match.replace("\\u", ""), 16));
      });
      return JSON.parse(decodedData);
    } catch (e) {
      console.error("유니코드 JSON 파싱 실패:", e);
      return null;
    }
  };

  const tableData = parseUnicodeJson(originalTableData);

  // 데이터가 올바르게 파싱되었는지 확인
  if (!tableData) {
    return <div>유효하지 않은 데이터입니다.</div>;
  }

  // `지표 설명` 컬럼 제거
  const headers = Object.keys(tableData).filter(
    (header) => header !== "지표 설명"
  );
  const rows = Object.keys(tableData[headers[0]]); // 첫 번째 열의 키로 행 추출

  // 병합된 셀을 추적
  const calculateRowSpan = (header, rows) => {
    let lastValue = null;
    const rowSpanMap = {};
    let spanCount = 0;

    rows.forEach((row, index) => {
      const currentValue = tableData[header][row];
      if (currentValue === lastValue) {
        spanCount += 1;
        rowSpanMap[index - spanCount] = spanCount + 1;
        rowSpanMap[index] = 0; // 현재 인덱스는 병합되므로 rowSpan 0
      } else {
        spanCount = 0;
        rowSpanMap[index] = 1; // 새로운 값이면 rowSpan 1
      }
      lastValue = currentValue;
    });

    return rowSpanMap;
  };

  const rowSpanMap = calculateRowSpan("추출 범위", rows);

  // 설명 창의 토글 상태를 관리하기 위한 상태
  const togglePopup = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <table
      cellPadding="5"
      cellSpacing="0"
      style={{
        tableLayout: "fixed",
        width: "100%",
        borderCollapse: "separate",
      }}
    >
      <colgroup>
        <col style={{ width: "11.25%" }} />
        <col style={{ width: "27.5%" }} />
        <col style={{ width: "11.25%" }} />
        <col style={{ width: "11.25%" }} />
        <col style={{ width: "11.25%" }} />
        <col style={{ width: "11.25%" }} />
        <col style={{ width: "8.75%" }} />
        <col style={{ width: "7.5%" }} />
      </colgroup>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              style={{
                textAlign: "center",
                backgroundColor: "gray", // 배경 회색
                color: "white", // 텍스트 흰색
                borderTopLeftRadius: index === 0 ? "0.5rem" : "0px", // 첫 번째 셀
                borderTopRightRadius:
                  index === headers.length - 1 ? "0.5rem" : "0px", // 마지막 셀
                border: "1px solid white",
                borderBottom: "1px solid gray",
                padding: "0.75rem 0", // 여백
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowKey, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => {
              if (header === "추출 범위") {
                const rowSpan = rowSpanMap[rowIndex];
                if (rowSpan > 0) {
                  return (
                    <td
                      key={`${rowIndex}-${colIndex}`}
                      rowSpan={rowSpan}
                      style={{
                        textAlign: "center",
                        borderLeft: "1px solid gray", // 왼쪽 테두리
                        borderRight: "1px solid gray", // 오른쪽 테두리
                        borderBottom: "1px solid gray", // 아래쪽 테두리
                        borderTop: "none", // 상단 테두리 제거
                      }}
                    >
                      {tableData[header][rowKey]}
                    </td>
                  );
                } else {
                  return null;
                }
              } else {
                const cellStyle =
                  header === "발생 여부"
                    ? {
                        fontSize: "1.25rem",
                        textAlign: "center",
                        borderTop: "1px solid white", // 상단 테두리 제거
                        borderRight: "1px solid gray", // 오른쪽 테두리
                        borderBottom: "1px solid gray", // 아래쪽 테두리
                        borderLeft: "1px solid white", // 왼쪽 테두리
                      }
                    : {
                        borderTop: "1px solid white", // 상단 테두리 제거
                        borderRight: "1px solid gray", // 오른쪽 테두리
                        borderBottom: "1px solid gray", // 아래쪽 테두리
                        borderLeft: "1px solid white", // 왼쪽 테두리
                        padding: "0 0.75rem",
                      };

                // 지표 열에 버튼 추가
                if (header === "지표") {
                  return (
                    <td key={`${rowIndex}-${colIndex}`} style={cellStyle}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {tableData[header][rowKey]}
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          <button
                            style={{
                              display: "flex", // 내부 콘텐츠를 Flexbox로 정렬
                              justifyContent: "center", // 가로축 중앙 정렬
                              alignItems: "center", // 세로축 중앙 정렬
                              cursor: "pointer",
                            }}
                            onClick={() => togglePopup(rowIndex)}
                          >
                            <IoAlertCircle
                              style={{ transform: "scaleY(-1)" }}
                              size="1.125rem"
                              color={openIndex === rowIndex ? "black" : "gray"} // 토글 상태에 따라 색상 변경
                            />
                          </button>
                          {openIndex === rowIndex && (
                            <div
                              style={{
                                position: "absolute",
                                minWidth: "200px",
                                top: "0%", // 버튼의 우측으로 이동
                                left: "100%", // 버튼의 왼쪽 정렬
                                backgroundColor: "black",
                                borderRadius: "0.25rem",
                                padding: "0.75rem",
                                zIndex: 1000,
                                color: "white",
                                fontSize: "0.825rem",
                              }}
                            >
                              {tableData["지표 설명"][rowKey]}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  );
                }

                return (
                  <td key={`${rowIndex}-${colIndex}`} style={cellStyle}>
                    {typeof tableData[header][rowKey] === "number"
                      ? header === "출현 횟수"
                        ? tableData[header][rowKey] + "회"
                        : (tableData[header][rowKey] * 100).toFixed(2) + "%"
                      : tableData[header][rowKey]}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
