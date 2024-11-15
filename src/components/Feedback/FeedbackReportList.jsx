import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import * as F from "../../styles/feedback-report.style";
import { useParams } from "react-router";
import { getFeedback } from "../../apis/feedback";
import ReactMarkdown from "react-markdown";
import RenderTable from "./RenderTable";

export default function FeedbackReportList() {
  const params = useParams();
  const [reportData, setReportData] = useState([]);

  const fetchReport = async (id) => {
    const report = await getFeedback(id);
    setReportData(report);
  };

  useEffect(() => {
    fetchReport(params.feedbackId);
    console.log(`hihi${params.feedbackId} ${typeof params.feedbackId}`);
  }, [params]);

  // 타임스탬프를 날짜 형식으로 변환하는 함수
  const convertTimestampToDate = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    return date.toISOString().split("T")[0]; // 'YYYY-MM-DD' 형식으로 변환
  };

  // const renderTable = (originalTableData) => {
  //   const parseUnicodeJson = (data) => {
  //     try {
  //       // 유니코드 이스케이프를 일반 문자열로 변환
  //       const decodedData = data.replace(/\\u[\dA-F]{4}/gi, (match) => {
  //         return String.fromCharCode(parseInt(match.replace("\\u", ""), 16));
  //       });

  //       // JSON 파싱
  //       return JSON.parse(decodedData);
  //     } catch (e) {
  //       console.error("유니코드 JSON 파싱 실패:", e);
  //       return null;
  //     }
  //   };

  //   const tableData = parseUnicodeJson(originalTableData);

  //   console.log(tableData);

  //   // 데이터가 올바르게 파싱되었는지 확인
  //   if (!tableData) {
  //     return <div>유효하지 않은 데이터입니다.</div>;
  //   }

  //   // 테이블 렌더링
  //   const headers = Object.keys(tableData); // 테이블의 열 이름 추출
  //   const rows = Object.keys(tableData[headers[0]]); // 첫 번째 열의 키로 행 추출

  //   // 병합된 셀을 추적
  //   const calculateRowSpan = (header, rows) => {
  //     let lastValue = null;
  //     const rowSpanMap = {};
  //     let spanCount = 0;

  //     rows.forEach((row, index) => {
  //       const currentValue = tableData[header][row];
  //       if (currentValue === lastValue) {
  //         spanCount += 1;
  //         rowSpanMap[index - spanCount] = spanCount + 1;
  //         rowSpanMap[index] = 0; // 현재 인덱스는 병합되므로 rowSpan 0
  //       } else {
  //         spanCount = 0;
  //         rowSpanMap[index] = 1; // 새로운 값이면 rowSpan 1
  //       }
  //       lastValue = currentValue;
  //     });

  //     return rowSpanMap;
  //   };

  //   const rowSpanMap = calculateRowSpan("추출 범위", rows);

  //   return (
  //     <table
  //       border="1"
  //       cellPadding="5"
  //       cellSpacing="0"
  //       style={{ tableLayout: "fixed", width: "100%" }}
  //     >
  //       <colgroup>
  //         <col style={{ width: "10%" }} />
  //         <col style={{ width: "20%" }} />
  //         <col style={{ width: "10%" }} />
  //         <col style={{ width: "10%" }} />
  //         <col style={{ width: "10%" }} />
  //         <col style={{ width: "10%" }} />
  //         <col style={{ width: "10%" }} />
  //         <col style={{ width: "5%" }} />
  //         <col style={{ width: "15%" }} />
  //       </colgroup>
  //       <thead>
  //         <tr>
  //           {headers.map((header, index) => (
  //             <th key={index} style={{ textAlign: "center" }}>
  //               {header}
  //             </th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {rows.map((rowKey, rowIndex) => (
  //           <tr key={rowIndex}>
  //             {headers.map((header, colIndex) => {
  //               if (header === "추출 범위") {
  //                 // '추출 범위' 컬럼 병합 처리
  //                 const rowSpan = rowSpanMap[rowIndex];
  //                 if (rowSpan > 0) {
  //                   return (
  //                     <td
  //                       key={`${rowIndex}-${colIndex}`}
  //                       rowSpan={rowSpan}
  //                       style={{ textAlign: "center" }}
  //                     >
  //                       {tableData[header][rowKey]}
  //                     </td>
  //                   );
  //                 } else {
  //                   return null; // 병합된 셀은 렌더링하지 않음
  //                 }
  //               } else {
  //                 // 발생 여부 컬럼 중앙 정렬 처리
  //                 const cellStyle = (() => {
  //                   if (header === "발생 여부") {
  //                     return { fontSize: "1.25rem", textAlign: "center" }; // 발생 여부 중앙 정렬
  //                   }
  //                   if (header === "지표" || header === "지표 설명") {
  //                     return { fontSize: "0.875rem" }; // 지표 및 지표 설명 폰트 크기 설정
  //                   }
  //                   return {}; // 기본 스타일
  //                 })();
  //                 return (
  //                   <td key={`${rowIndex}-${colIndex}`} style={cellStyle}>
  //                     {typeof tableData[header][rowKey] === "number"
  //                       ? header === "출현 횟수"
  //                         ? tableData[header][rowKey] + "회"
  //                         : (tableData[header][rowKey] * 100).toFixed(2) + "%"
  //                       : tableData[header][rowKey]}
  //                   </td>
  //                 );
  //               }
  //             })}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   );
  // };

  const renderTable = (tableData) => {
    return <RenderTable originalTableData={tableData}></RenderTable>;
  };

  const renderChart = (charData) => {
    const data = JSON.parse(charData);

    if (!data || !data.Close || !data.Volume) {
      console.log(typeof data);
      console.error("Invalid data for rendering chart");
      return <div>No chart data available</div>;
    }
    // JSON 데이터를 처리
    const labels = Object.keys(data.Close).map(convertTimestampToDate);
    const priceValues = Object.values(data.Close);
    const volumeValues = Object.values(data.Volume);

    return (
      <Chart
        labels={labels}
        priceValues={priceValues}
        volumeValues={volumeValues}
      />
    );
  };

  const renderContent = (item) => {
    switch (item.type) {
      case "table":
        return (
          <F.FeedbackReportItemLayout key={item.index}>
            <h3>테이블</h3>
            {renderTable(item.data)} {/* 테이블 렌더링 */}
          </F.FeedbackReportItemLayout>
        );

      case "chart":
        return (
          <F.FeedbackReportChartLayout key={item.index}>
            <h3>차트</h3>
            {renderChart(item.data)}
          </F.FeedbackReportChartLayout>
        );

      case "text":
        return (
          <F.FeedbackReportItemLayout
            key={item.index}
            style={{
              wordBreak: "keep-all",
              whiteSpace: "normal",
            }}
          >
            <h3>텍스트</h3>
            <ReactMarkdown>
              {item.data.trim()}
              {/* {item.data
                .trim()
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))} */}
            </ReactMarkdown>
          </F.FeedbackReportItemLayout>
        );
      default:
        return null;
    }
  };

  return (
    <F.FeedbackReportListContainer>
      {reportData.length > 0 ? (
        reportData.map((item) => renderContent(item))
      ) : (
        <p>Loading...</p>
      )}
    </F.FeedbackReportListContainer>
  );
}
