import React from "react";
import "./theme/styles.scss";
import Header from "./components/header";
import PageIndex from "./components/pageIndex";
import PageOne from "./docs/PageOne";
import PageTwo from "./docs/PageTwo";
import PageThree from "./docs/PageThree";
import ButtonToTop from "./components/ButtonToTop";

function App() {
  return (
    <React.Fragment>
      <Header />
      <PageIndex />
      <section className="text-body">
        <PageOne />
        <PageTwo />
        <PageThree />
      </section>
      <ButtonToTop />
    </React.Fragment>
  );
}

export default App;
