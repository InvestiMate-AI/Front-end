import React from "react";
import * as H from "../styles/home.style";
import DefaultLayout from "../components/Layout/DefaultLayout";

function HomePage() {
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
