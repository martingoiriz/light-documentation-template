import React from "react";

function PageIndex() {
  return (
    <main className="page-index">
      <h2 className="index-title">Documentation</h2>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>
              <a href="#PageOne">Page One</a>
            </h2>
          </div>
          <div className="col-12">
            <h3>
              <a href="#subtitleOne">Subtitle 1</a>
            </h3>
          </div>
          <div className="col-12">
            <h4>
              <a href="#subSubtitleOne">Sub-Subtitle 1</a>
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2>
              <a href="#PageTwo">Page Two</a>
            </h2>
          </div>
          <div className="col-12">
            <h3>
              <a href="#subtitleTwo">Subtitle 2</a>
            </h3>
          </div>
          <div className="col-12">
            <h4>
              <a href="#subSubtitleTwo">Sub-Subtitle 2</a>
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2>
              <a href="#PageThree">PageThree</a>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageIndex;
