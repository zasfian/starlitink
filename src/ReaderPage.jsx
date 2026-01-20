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
            <iframe
              src="https://online.fliphtml5.com/bofup/khju/"
              title="DREAMERS"
              allowFullScreen
              scrolling="no"
              frameBorder="0"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>

        {/* Donation Sidebar */}
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
    </div>
  );
}
