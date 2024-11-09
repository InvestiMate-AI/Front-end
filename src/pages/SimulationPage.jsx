import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import SimulationSidebar from "../components/Simulation/SimulationSidebar";
import SimulationCreation from "../components/Simulation/SimulationCreation";
import SimulationReportList from "../components/Simulation/SimulationReportList";
import * as S from "../styles/simulation.style";

function SimulationPage() {
  return (
    <DefaultLayout>
      <S.SimulationPageLayout>
        <SimulationSidebar />
        <S.SimulationDashboardLayout>
          <SimulationCreation />
          <SimulationReportList></SimulationReportList>
        </S.SimulationDashboardLayout>
      </S.SimulationPageLayout>
    </DefaultLayout>
  );
}

export default SimulationPage;
