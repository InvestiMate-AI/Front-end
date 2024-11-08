import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import SimulationSidebar from "../components/Simulation/SimulationSidebar";
import * as S from "../styles/simulation.style";

function SimulationPage() {
  const handleClickCreateFeedbackButton = () => {};

  return (
    <DefaultLayout>
      <S.SimulationPageLayout>
        <SimulationSidebar></SimulationSidebar>
        <S.SimulationContainer></S.SimulationContainer>
      </S.SimulationPageLayout>
      <button onClick={handleClickCreateFeedbackButton}>피드백 생성</button>
    </DefaultLayout>
  );
}

export default SimulationPage;
