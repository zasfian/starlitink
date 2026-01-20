import React, { useState } from "react";
import "./ReaderPage.css";

export default function ReaderPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="page">
      <header className="site-header">
        <h1>Starlit Ink</h1>
      </header>

      <section className="reader-frame-wrapper">
        <div className="reader-frame book-shadow">
          {/* Loading overlay */}
          <div
            className={`loading-overlay ${loading ? "visible" : "hidden"}`}
          >
            <div className="spinner"></div>
            <p>Loading your story...</p>
          </div>

          <iframe
            src="https://online.fliphtml5.com/bofup/khju/"
            title="DREAMERS"
            allowFullScreen
            onLoad={() => setLoading(false)}
          />
        </div>
      </section>
    </div>
  );
}
