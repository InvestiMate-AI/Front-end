import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import SimulationSidebar from "../components/Simulation/SimulationSidebar";
import SimulationAutoCreation from "../components/Simulation/SimulationAutoCreation";
import SimulationCustomCreation from "../components/Simulation/SimulationCustomCreation";
import SimulationReportList from "../components/Simulation/SimulationReportList";
import * as S from "../styles/simulation.style";

function SimulationPage() {
  const [simulationType, setSimulationType] = useState("auto");

  const handleSetSimulationType = (typeName) => {
    setSimulationType(typeName);
  };

  return (
    <DefaultLayout>
      <S.SimulationPageLayout>
        <SimulationSidebar handleSetSimulationType={handleSetSimulationType} />
        {simulationType === "auto" ? (
          <S.SimulationDashboardLayout>
            <SimulationAutoCreation />
            <SimulationReportList></SimulationReportList>
          </S.SimulationDashboardLayout>
        ) : (
          <S.SimulationDashboardLayout>
            <SimulationCustomCreation />
            <SimulationReportList></SimulationReportList>
          </S.SimulationDashboardLayout>
        )}
      </S.SimulationPageLayout>
    </DefaultLayout>
  );
}

export default SimulationPage;
