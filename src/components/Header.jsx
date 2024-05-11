import React, { useEffect, useState } from "react";
import * as H from "../styles/header.style";
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <>
      <H.HeaderLayout>
        <div>header</div>
      </H.HeaderLayout>
    </>
  );
}

export default Header;
