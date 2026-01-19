import React from "react";

export default function FlipbookPDF() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0b0b1f, #1a1a2e)",
        color: "#e0e0ff",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", textAlign: "center" }}>
        Starlit Ink · My Novel
      </h1>

      <p style={{ textAlign: "center", marginBottom: "20px", color: "#aaa" }}>
        Enjoy the full novel as a flipbook below
      </p>

      {/* FlipHTML5 Embed */}
      <div style={{ width: "100%", maxWidth: "900px", height: "600px" }}>
        <iframe
          src="https://online.fliphtml5.com/<div style="position:relative;padding-top:max(60%,324px);width:100%;height:0;"><iframe style="position:absolute;border:none;width:100%;height:100%;left:0;top:0;" src="https://online.fliphtml5.com/bofup/khju/" title="DREAMERS" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Novel Flipbook"
        ></iframe>
      </div>

      <footer style={{ marginTop: "30px", fontSize: "0.8rem", color: "#888", textAlign: "center" }}>
        © 2026 Starlit Ink · Fantasy & Sci-Fi Novel
      </footer>
    </div>
  );
}
