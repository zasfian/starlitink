import React, { useState } from "react";
import "./ReaderPage.css";

export default function ReaderPage() {
  const [loading, setLoading] = useState(true);

  const paypalLink = "https://www.paypal.com/donate?hosted_button_id=YOUR_PAYPAL_ID"; // replace with your PayPal hosted button ID
  const kofiLink = "https://ko-fi.com/YOUR_KOFI_USERNAME"; // replace with your Ko-fi username

  return (
    <div className="page">
      <header className="site-header">
        <h1>Starlit Ink</h1>
      </header>

      {/* Donation Section above the reader */}
      <div className="donation-section">
        <p>If you enjoy this book, please consider supporting the author!</p>
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

      <section className="reader-frame-wrapper">
        <div className="reader-frame book-shadow">
          {/* Loading overlay */}
          {loading && (
            <div className="loading-overlay visible">
              <div className="spinner"></div>
              <p>Loading your story...</p>
            </div>
          )}

          <iframe
            src="https://online.fliphtml5.com/bofup/khju/"
            title="DREAMERS"
            allowFullScreen
            onLoad={() => setLoading(false)}
          />
        </div>
      </section>

      {/* Donation Section below the reader */}
      <div className="donation-section">
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
    </div>
  );
}
