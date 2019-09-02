import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = {
    pageNumber: 1
  };

  render() {
    const { pageNumber } = this.state;

    return (
      <div className="ui centered grid" style={{ marginTop: "3%" }}>
        <Document file="Ronak_Resume.pdf" onLoadError={console.error}>
          <Page pageNumber={pageNumber} renderAnnotationLayer={false} />
        </Document>
      </div>
    );
  }
}

export default Resume;
