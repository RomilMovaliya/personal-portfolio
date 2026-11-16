"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Romil Movaliya. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs">
          Software Engineer • PTTR Freight Loadboard, NREX UK Courier Suite &amp; Nuvio.
        </p>
      </div>
    </footer>
  );
}
