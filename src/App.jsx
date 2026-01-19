import React from "react";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0b0b1f, #1a1a2e)",
        color: "#e0e0ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Starlit Ink · DREAMERS</h1>

      {/* FlipHTML5 Embed */}
      <div style={{ width: "100%", maxWidth: "1000px", height: "650px" }}>
        <iframe
          src="https://online.fliphtml5.com/bofup/khju/"
          title="DREAMERS"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          scrolling="no"
          allowFullScreen
        />
      </div>

      <p style={{ marginTop: "20px", fontSize: "0.85rem", color: "#aaa" }}>
        © 2026 Starlit Ink
      </p>
    </div>
  );
}
