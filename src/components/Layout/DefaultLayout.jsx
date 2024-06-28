import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import * as D from "../../styles/default-layout.style";

export default function DefaultLayout({ children }) {
  return (
    <D.Layout>
      <Header />
      <D.Main>{children}</D.Main>
      <Footer />
    </D.Layout>
  );
}
