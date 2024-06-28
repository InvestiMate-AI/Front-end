import React from "react";
import * as H from "../styles/home.style";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <DefaultLayout>
        <H.Section1>
          <h1>INVESTIMATE</h1>
        </H.Section1>
      </DefaultLayout>
    </>
  );
}

export default HomePage;
