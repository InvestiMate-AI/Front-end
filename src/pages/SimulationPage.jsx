import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import SimulationSidebar from "../components/Simulation/SimulationSidebar";
import SimulationAutoCreation from "../components/Simulation/SimulationAutoCreation";
import SimulationCustomCreation from "../components/Simulation/SimulationCustomCreation";
import SimulationReportList from "../components/Simulation/SimulationReportList";
import * as S from "../styles/simulation.style";
import Spinner from "../styles/spinner.style";

function SimulationPage() {
  const [simulationType, setSimulationType] = useState("auto");
  const [simulationReports, setSimulationReports] = useState({});
  const [
    isLoadingForFetchingSimulationReport,
    setIsLoadingForFetchingSimulationReport,
  ] = useState(false);

  const handleSetSimulationType = (typeName) => {
    setSimulationType(typeName);
  };

  const handleFetchSimulationReports = (reportsData) => {
    setSimulationReports(reportsData);
    setIsLoadingForFetchingSimulationReport(false); // 데이터 로드 완료 시 로딩 상태 해제
  };

  // simulationType 변경 시 simulationReports 초기화
  useEffect(() => {
    setSimulationReports({}); // simulationReports 초기화
  }, [simulationType]);

  useEffect(() => {
    console.log(simulationReports);
  }, [simulationReports]);

  return (
    <DefaultLayout>
      <S.SimulationPageLayout>
        <SimulationSidebar handleSetSimulationType={handleSetSimulationType} />
        {simulationType === "auto" ? (
          <S.SimulationDashboardLayout>
            <SimulationAutoCreation
              handleFetchSimulationReports={handleFetchSimulationReports}
              setIsLoadingForFetchingSimulationReport={
                setIsLoadingForFetchingSimulationReport
              } // 로딩 상태 업데이트
            />
            {isLoadingForFetchingSimulationReport ? ( // 로딩 중일 때 Spinner 렌더링
              <Spinner />
            ) : (
              <SimulationReportList simulationReports={simulationReports} />
            )}
          </S.SimulationDashboardLayout>
        ) : (
          <S.SimulationDashboardLayout>
            <SimulationCustomCreation
              handleFetchSimulationReports={handleFetchSimulationReports}
              setIsLoadingForFetchingSimulationReport={
                setIsLoadingForFetchingSimulationReport
              } // 로딩 상태 업데이트
            />
            {isLoadingForFetchingSimulationReport ? ( // 로딩 중일 때 Spinner 렌더링
              <Spinner />
            ) : (
              <SimulationReportList simulationReports={simulationReports} />
            )}
          </S.SimulationDashboardLayout>
        )}
      </S.SimulationPageLayout>
    </DefaultLayout>
  );
}

export default SimulationPage;
