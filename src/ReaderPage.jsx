import React, { useState } from "react";
import "./ReaderPage.css";

export default function ReaderPage() {
  const [loading, setLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const paypalLink = "https://www.paypal.com/donate?hosted_button_id=YOUR_PAYPAL_ID"; // replace
  const kofiLink = "https://ko-fi.com/YOUR_KOFI_USERNAME"; // replace

  return (
    <div className="page">
      {/* Header */}
      <header className="site-header">
        <h1>Starlit Ink</h1>
      </header>

      {/* Reader + Donations */}
      <section className="reader-donation-container">
        {/* FlipHTML5 Reader */}
        <div className="reader-frame-wrapper">
          <div className="reader-frame book-shadow">
            {loading && (
              <div className="loading-overlay visible">
                <div className="spinner"></div>
                <p>Loading your story...</p>
              </div>
            )}

            {!iframeError ? (
              <iframe
                src="https://online.fliphtml5.com/bofup/DREAMERS/" // NEW URL
                title="DREAMERS"
                allowFullScreen
                scrolling="no"
                frameBorder="0"
                style={{
                  width: "100%",
                  height: "80vh",       // ensures full visibility
                  border: "none",
                }}
                onLoad={() => setLoading(false)}
                onError={() => {
                  setLoading(false);
                  setIframeError(true);
                }}
              />
            ) : (
              <div className="iframe-fallback">
                <p>
                  FlipHTML5 viewer cannot load on your device.
                  <br />
                  You can read the book directly here:{" "}
                  <a
                    href="https://online.fliphtml5.com/bofup/DREAMERS/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Book
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Donation Sidebar */}
        <div className="donation-sidebar">
          <p className="donation-text">
            Enjoy the book? Support the author!
          </p>
          <div className="donation-buttons">
            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-button paypal"
            >
              Donate via PayPal
            </a>
            <a
              href={kofiLink}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-button kofi"
            >
              Support on Ko-fi
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Donation Bar */}
      <div className="mobile-sticky-donation">
        <a
          href={paypalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="donate-button paypal"
        >
          PayPal
        </a>
        <a
          href={kofiLink}
          target="_blank"
          rel="noopener noreferrer"
          className="donate-button kofi"
        >
          Ko-fi
        </a>
      </div>
    </div>
  );
}
