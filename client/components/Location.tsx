import React from "react";
import mapVideo from "./../map.mp4";

/**
 * Location section with layout flipped
 * - Video now on the left, text on the right
 * - Video takes full vertical space
 */
const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "Puerto Rico", flag: "🇵🇷" },
  { name: "Uruguay", flag: "🇺🇾" },
  { name: "El Salvador", flag: "🇸🇻" },
  { name: "Panama", flag: "🇵🇦" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "United Kingdom", flag: "🇬🇧" },
];

export default function Location() {
  return (
    <section className="relative w-full py-14 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(800px 400px at 10% 20%, rgba(37,99,235,.25), transparent 60%), radial-gradient(600px 300px at 90% 80%, rgba(99,102,241,.25), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 md:mb-14 text-center">
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Operation Countries
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            We currently operate in the regions below and continue expanding.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* Left column: dominant video */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] overflow-hidden flex order-1 md:order-1">
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[560px] lg:h-[680px] xl:h-[800px]">
              <video
                src={mapVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  boxShadow:
                    "inset 0 0 80px 20px rgba(0,0,0,0.35), inset 0 0 0 0 rgba(0,0,0,0)",
                }}
              />
            </div>
          </div>

          {/* Right column: text content */}
          <div className="space-y-6 flex flex-col h-full order-2 md:order-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-inter text-xl sm:text-2xl font-semibold text-white">
                  Operating Countries
                </h3>
                <span className="text-xs sm:text-sm text-blue-300/90 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1">
                  {countries.length} regions
                </span>
              </div>
              <div className="h-0.5 w-14 bg-gradient-to-r from-blue-500/70 to-indigo-400/70 rounded-full mb-5" />

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {countries.map((c) => (
                  <li
                    key={c.name}
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors px-3 py-2"
                  >
                    <span className="text-lg leading-none" aria-hidden>
                      {c.flag}
                    </span>
                    <span className="font-archivo text-gray-200 text-sm sm:text-base">
                      {c.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info panel */}
            <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/40 to-indigo-800/40 backdrop-blur-md p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.25)] flex flex-col justify-center">
              <h4 className="font-inter text-lg sm:text-xl font-semibold text-white mb-4">
                Global Presence
              </h4>
              <p className="font-archivo text-gray-300 leading-relaxed text-sm sm:text-base">
                Our teams, partners, and logistics hubs work tirelessly across
                continents to ensure smooth operations. This panel mirrors the
                map view, offering insights into where we’re active and growing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}