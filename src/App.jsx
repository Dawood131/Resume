import React from "react";
import Resume from "./components/Resume";
import { ResumePDFDownload } from "./components/ResumePDF";

function App() {
  return (
    <div>
      <Resume />
      <ResumePDFDownload />   
    </div>
  );
}

export default App;
