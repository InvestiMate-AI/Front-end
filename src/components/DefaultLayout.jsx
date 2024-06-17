import React from "react";
import Header from "./Header";
import * as D from "../styles/default-layout.style";

export default function DefaultLayout({ children }) {
  return (
    <D.Layout>
      <D.Header />
      <D.Main>{children}</D.Main>
    </D.Layout>
  );
}
