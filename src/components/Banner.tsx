import React from "react";
import { ArrowRight } from "lucide-react";

// CountUp that plays whenever it enters the viewport.
// Set triggerOnce to true if you only want it the first time.
function CountUp({
  end = 100,
  duration = 1500,     // ms
  suffix = "+",
  className = "",
  delay = 0,           // ms
  triggerOnce = false, // replay on every view by default
  resetOnExit = true,  // reset to 0 when scrolled out
}: {
  end?: number;
  duration?: number;
  suffix?: string;
  className?: string;
  delay?: number;
  triggerOnce?: boolean;
  resetOnExit?: boolean;
}) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const rafId = React.useRef<number | null>(null);
  const started = React.useRef(false);

  const start = React.useCallback(() => {
    if (started.current) return;
    started.current = true;
    const startAt = performance.now() + delay;

    const tick = (now: number) => {
      const t = Math.max(0, now - startAt);
      const progress = Math.min(t / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(eased * end));
      if (progress < 1) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        rafId.current = null;
      }
    };
    rafId.current = requestAnimationFrame(tick);
  }, [delay, duration, end]);

  const stop = React.useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = null;
    started.current = false;
    if (resetOnExit) setValue(0);
  }, [resetOnExit]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(end);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          if (triggerOnce) io.disconnect();
        } else if (!triggerOnce) {
          stop();
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [end, start, stop, triggerOnce]);

  return (
    <span ref={ref} className={className} aria-label={`${end}${suffix}`}>
      {value}
      {suffix}
    </span>
  );
}

export function Banner() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-white"
        aria-label="Luna Bloom hero section"
      >
        {/* Inset hero frame: creates left/right white space */}
        <div className="absolute inset-y-0 left-1 right-1 sm:left-1 sm:right-1 md:left-2 md:right-2 lg:left-4 lg:right-4">
        <div className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-black/10">
        <img src="https://r2.flowith.net/files/o/1754409301742-elegant_floral_hero_image_index_0@1024x1024.png"
        alt="Beautiful flower arrangement" 
        className="absolute inset-0 h-full w-full object-cover" /> 

            {/* Soft film + bottom gradient for legibility (clipped to rounding) */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Decorative ambient color glows (kept inside the rounded frame) */}
            <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl" />
            <div className="absolute -right-12 bottom-14 h-64 w-64 rounded-full bg-rose-400/20 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 md:text-left">
                <div className="mx-auto max-w-3xl md:mx-0">
                  <h1
                    className="font-serif text-5xl md:text-7xl leading-tight tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    <span className="relative inline-block">
                      Where Every Petal is a 
                      <br/>
                      Work of Art
                      <span
                        className="absolute -bottom-2 left-0 h-3 w-full rounded bg-rose-200/25 blur-[2px]"
                        aria-hidden="true"
                      />
                    </span>
                  </h1>

                  <p className="mt-6 font-sans text-base md:text-xl leading-relaxed text-white/95 drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]">
                    Welcome to Luna Bloom, the best flower shop in Kochi.
                    An artisanal floral studio where every bloom is thoughtfully crafted to tell a story. We believe in the timeless power of flowers to brighten spaces, express emotions, and create lasting memories.
                  </p>

                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start md:items-center">
                    <a
                    href="https://enhakkore.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-sans font-medium text-rose-600 shadow-sm ring-1 ring-black/10 transition-transform duration-300 hover:scale-[1.03] hover:bg-rose-50">
                      Shop Now
                    </a>
                    <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 font-sans font-medium text-white transition-colors duration-300 hover:bg-white hover:text-rose-600">
                      Contact Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End content */}
          </div>
        </div>
      </section>

      {/* Social Proof (3-column metrics, top spacing, no stroke) */}
<section aria-label="Social proof" className="relative bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
    <div className="relative mt-8 md:mt-12 rounded-2xl bg-white px-5 py-6 md:px-8 md:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
        {/* Metric 1 */}
        <div className="flex flex-col items-center justify-center py-4 sm:py-2">
          <CountUp
            end={100}
            duration={1400}
            delay={0}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          />
          <div className="mt-2 text-sm md:text-base text-gray-600">
            Happy customers
          </div>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col items-center justify-center py-4 sm:py-2 sm:border-l sm:border-gray-200">
          <CountUp
            end={35}
            duration={1500}
            delay={120}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          />
          <div className="mt-2 text-sm md:text-base text-gray-600">
            Deliveries completed
          </div>
        </div>

        {/* Metric 3 */}
        <div className="flex flex-col items-center justify-center py-4 sm:py-2 sm:border-l sm:border-gray-200">
          <CountUp
            end={13}
            duration={1600}
            delay={240}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          />
          <div className="mt-2 text-sm md:text-base text-gray-600">
            Events styled
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}