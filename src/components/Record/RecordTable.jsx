import React, { useState, useEffect } from "react";
import { getRecords } from "../../apis/record";
import * as R from "../../styles/record-table.style";

export default function RecordTable() {
  // 예시 데이터
  const [data, setData] = useState([]);

  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "ascending",
  });

  const getData = async () => {
    try {
      // const response = await fetch("/recordData.json");
      const response = await getRecords("/recordData.json");
      setData(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  useEffect(() => {
    // getData();
  }, []);

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

  // const requestCreateFeedback = async () => {

  // }

  // const handleClickCreateFeedbackButton = () => {
  //   requestCreateFeedback();
  // }

  return (
    <>
      <table>
        <R.THead>
          <R.TR>
            <th>번호</th>
            <th onClick={() => sortData("date")}>날짜</th>
            <th onClick={() => sortData("name")}>종목</th>
            <th onClick={() => sortData("volume")}>수량</th>
            <th onClick={() => sortData("type")}>매매유형</th>
          </R.TR>
        </R.THead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* 번호는 자동으로 오름차순 */}
              <td>{convertTimestampToDate(item.date)}</td>
              <td>{item.name}</td>
              <td>{item.volume}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={handleClickCreateFeedbackButton}>피드백 생성</button> */}
    </>
  );
}
