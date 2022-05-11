import React from "react";

import "./styles.css";

import JobDataEntryPage from "./JobDataEntry/JobDataEntryPage";

export default function App(): React.ReactElement {
  return (
    <div className="App">
      <JobDataEntryPage />
    </div>
  );
}
