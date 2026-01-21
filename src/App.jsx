import React from "react";

// KoFi Donate Button Component with Coffee Icon
function KoFiDonateButton() {
  const koFiUrl = "https://ko-fi.com/dreamzfree";

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
        If you’re enjoying <em>Starlit Ink</em>, you can support the project by sending a tip via Ko‑fi.
      </p>

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
      {/* Header with Storytelling Clarification */}
      <header style={{ textAlign: "center", padding: "1rem 0" }}>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>Starlit Ink</h1>
        <p style={{ fontSize: "1rem", color: "#ccc", marginTop: "0.25rem" }}>
          Welcome to Starlit Ink — a personal collection of stories told through flipbooks, videos, and creative formats.
        </p>
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
