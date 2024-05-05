import React, { Fragment } from "react"; // Import Fragment from react
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <header>
          <div> this is a multicontainer application</div>
          <Link to="/">Home </Link>
          <Link to="/otherpage">other page</Link>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/otherpage" element={<OtherPage />} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
