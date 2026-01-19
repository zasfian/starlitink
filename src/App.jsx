import { motion } from "framer-motion";
import { useState } from "react";

const pages = [
  "Under a starlit sky, ink shimmered into constellations. This was where stories were born.",
  "The archivists of Starlit Ink wrote worlds into existence—each page a portal.",
  "When the final empire fell among the stars, only the written word survived.",
  "You are holding one such surviving fragment. Turn the page carefully."
];

export default function FlipbookSite() {
  const [page, setPage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black text-neutral-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold mb-2 tracking-wide">Starlit Ink</h1>
      <p className="text-sm text-indigo-300 mb-6">Fantasy & Sci-Fi Stories · Free to Read</p>

      <div className="w-full max-w-xl bg-neutral-800/60 text-center py-3 mb-4 rounded-xl text-xs text-neutral-300">
        Advertisement · Supports Independent Storytelling
      </div>

      <motion.div
        key={page}
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-neutral-900 shadow-2xl rounded-2xl p-8 w-full max-w-xl min-h-[220px] text-lg leading-relaxed"
      >
        {pages[page]}
      </motion.div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setPage(Math.max(page - 1, 0))}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl disabled:opacity-40"
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(Math.min(page + 1, pages.length - 1))}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl disabled:opacity-40"
          disabled={page === pages.length - 1}
        >
          Next
        </button>
      </div>

      <div className="mt-10 text-xs text-neutral-500 text-center">
        © 2026 Starlit Ink · Stories written beneath distant stars<br />
        Privacy Policy · Contact
      </div>
    </div>
  );
}
