export default function ReaderPage() {
  return (
    <div className="page">
      <header className="site-header">
        <h1>Starlit Ink</h1>
      </header>

      <section className="reader-frame">
        <iframe
          src="PASTE_YOUR_FLIPHTML5_URL_HERE"
          title="Starlit Ink Reader"
          allowFullScreen
        />
      </section>
    </div>
  );
}
