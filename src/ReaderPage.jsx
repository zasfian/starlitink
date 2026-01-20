import React from "react";
import "./ReaderPage.css"; // we’ll add styles here

export default function ReaderPage() {
  return (
    <div className="page">
      <header className="site-header">
        <h1>Starlit Ink</h1>
      </header>

      <section className="reader-frame-wrapper">
        <div className="reader-frame">
          <iframe
            src="https://online.fliphtml5.com/bofup/khju/"
            title="DREAMERS"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
