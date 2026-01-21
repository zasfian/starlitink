import React, { useState } from "react";

// KoFi Donate Button Component with Coffee Icon & Tooltip
function KoFiDonateButton() {
  const koFiUrl = "https://ko-fi.com/dreamzfree";
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section
      id="support-author"
      style={{
        textAlign: "center",
        margin: "2rem auto",
        padding: "1.5rem",
        maxWidth: "600px",
        border: "2px solid #E67E22",
        borderRadius: "8px",
        background: "#fff9f2",
      }}
    >
      <h2 style={{ margin: "0.5rem 0", fontSize: "1.8rem", color: "#E67E22" }}>
        ❤️ Support the Author
      </h2>

      <p style={{ fontSize: "1rem", color: "#333", marginBottom: "1rem" }}>
        If you’re enjoying <em>Starlit Ink</em>, you can support the project by sending a small tip via Ko‑fi.
      </p>

      {/* Suggested Minimum Support with Info Icon */}
      <div style={{ marginBottom: "1rem", fontSize: "0.95rem", color: "#333" }}>
        Suggested minimum support: <strong>MYR 5</strong>{" "}
        <span
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          style={{
            display: "inline-block",
            width: "16px",
            height: "16px",
            lineHeight: "16px",
            textAlign: "center",
            borderRadius: "50%",
            backgroundColor: "#29abe0",
            color: "#fff",
            fontWeight: "bold",
            cursor: "help",
            fontSize: "0.75rem",
            marginLeft: "0.25rem",
            position: "relative",
          }}
        >
          i
          {showTooltip && (
            <div
              style={{
                position: "absolute",
                bottom: "125%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#333",
                color: "#fff",
                padding: "0.5rem 0.75rem",
                borderRadius: "6px",
                fontSize: "0.8rem",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                zIndex: 10,
              }}
            >
              To ensure the author receives most of your donation after PayPal fees, we recommend a minimum tip of MYR 5.
            </div>
          )}
        </span>
      </div>

      {/* Ko-fi Donate Button */}
      <a
        href={koFiUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 1.5rem",
          background: "#29abe0",
          color: "#fff",
          fontSize: "1.15rem",
          fontWeight: "600",
          textDecoration: "none",
          borderRadius: "6px",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "#0d8ecf";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "#29abe0";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <span style={{ fontSize: "1.3rem" }}>☕</span>
        Support on Ko‑fi
      </a>
    </section>
  );
}

// Main App Component
export default function App() {
  return (
    <div style={{ background: "#1a1a1a", minHeight: "100vh", color: "#fff" }}>
      <header style={{ textAlign: "center", padding: "1rem 0" }}>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>Starlit Ink</h1>
      </header>

      <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* FlipHTML5 Embed */}
        <div
          style={{
            position: "relative",
            paddingTop: "max(60%, 324px)",
            width: "90%",
            maxWidth: "1000px",
            height: 0,
            margin: "2rem 0",
          }}
        >
          <iframe
            title="DREAMERS"
            src="https://online.fliphtml5.com/bofup/khju/"
            style={{
              position: "absolute",
              border: "none",
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
            }}
            seamless="seamless"
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allowFullScreen
          ></iframe>
        </div>

        {/* Ko-fi Donate Button */}
        <KoFiDonateButton />
      </main>

      <footer style={{ textAlign: "center", padding: "1rem 0", fontSize: "0.85rem", color: "#aaa" }}>
        © 2026 Starlit Ink. All rights reserved.
      </footer>
    </div>
  );
}
