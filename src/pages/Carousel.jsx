import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const logos = [
  {
    src: "https://lh4.googleusercontent.com/proxy/giEDaX3GfzFq-HAvCa_92K-8lRvuedIQiGrBvxVAqXdRmXoNj-CTe0nJNJVM5P5DYZV7m3imSRVlx7YAPVu4gurNo4jSVXJ8d220_ZWhCyqz08KE53GqC54ayElFbrNb92iOdZMfYXz6",
    alt: "Open AI",
    style: { height: 90 },
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAnfnDe6t9ji8QojQ40sathiAUtstesFiJYH9VEhej582jd3TTnxzvRLdAWZWAdB-_g&usqp=CAU",
    alt: "Perplexity",
    style: { height: 40 },
  },
  {
    src: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    alt: "Cursor",
    style: { height: 70 },
  },
  {
    src: "../../src/assets/images/Raycast.png",
    alt: "Raycast",
    style: { height: 90 },
  },
  {
    src: "https://cdn.supercell.com/supercell.com/160407072526/supercell.com/files/og_mainpage.png",
    alt: "Supercell",
    style: { height: 90 },
  },
  {
    src: "../../src/assets/images/Boom.png",
    alt: "Boom",
    style: { height: 90 },
  },
  {
    src: "../../src/assets/images/Scale.png",
    alt: "Scale",
    style: { height: 90 },
  },
  {
    src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel-text.png",
    alt: "Vercel",
    style: { height: 30 },
  },
  {
    src: "https://www.electronicpaymentsinternational.com/wp-content/uploads/sites/4/2020/05/Stripe-logo-white_lg.png",
    alt: "Stripe",
    style: { height: 50 },
  },
  {
    src: "../../src/assets/images/Remote.png",
    alt: "Remote",
    style: { height: 120 },
  },
];

const GROUP_SIZE = 6;
const STAGGER_DURATION = 70;
const FADE_DURATION = 500;

function CarouselPage({ className = "" }) {
  const [groupIdx, setGroupIdx] = useState(0);
  const [visibleIdxs, setVisibleIdxs] = useState(Array(GROUP_SIZE).fill(true));
  const [phase, setPhase] = useState("visible");
  const [isHovered, setIsHovered] = useState(false);

  const groups = [logos.slice(0, GROUP_SIZE), logos.slice(GROUP_SIZE)];

  useEffect(() => {
    if (phase === "visible") {
      setVisibleIdxs(Array(GROUP_SIZE).fill(true));
      const timeout = setTimeout(() => setPhase("fadingOut"), 1500);
      return () => clearTimeout(timeout);
    }

    if (phase === "fadingOut") {
      let idx = -1;
      const interval = setInterval(() => {
        setVisibleIdxs((prev) => {
          const next = [...prev];
          next[idx] = false;
          return next;
        });
        idx++;
        if (idx === GROUP_SIZE) {
          clearInterval(interval);
          setTimeout(() => {
            setGroupIdx((prev) => (prev + 1) % groups.length);
            setPhase("fadingIn");
          }, FADE_DURATION);
        }
      }, STAGGER_DURATION);
      return () => clearInterval(interval);
    }

    if (phase === "fadingIn") {
      let idx = -1;
      setVisibleIdxs(Array(GROUP_SIZE).fill(false));
      const interval = setInterval(() => {
        setVisibleIdxs((prev) => {
          const next = [...prev];
          next[idx] = true;
          return next;
        });
        idx++;
        if (idx === GROUP_SIZE) {
          clearInterval(interval);
          setTimeout(() => setPhase("visible"), 1500);
        }
      }, STAGGER_DURATION);
      return () => clearInterval(interval);
    }
  }, [phase, groupIdx]);

  return (
    <div
      className={`relative bg-black py-12 w-full flex flex-col items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center text-white pb-5">
        <h1 className="text-xl">Powering the world’s best product teams.</h1>
        <h1 className="text-xl text-white/50 p-1">From next-gen startups to established enterprises.</h1>
      </div>
      <div
        className={`w-4/5 pt-10 max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 justify-items-center min-h-[160px] transition duration-300 hover:cursor-pointer ${
          isHovered ? "filter blur-md" : ""
        }`}
      >
        {groups[groupIdx].map((logo, idx) => (
          <motion.img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            style={logo.style}
            className="object-contain grayscale hover:grayscale-0 transition duration-300"
            animate={{
              opacity: visibleIdxs[idx] ? 1 : 0,
              filter: visibleIdxs[idx] ? "blur(0px)" : "blur(8px)",
            }}
            transition={{ duration: FADE_DURATION / 1000 }}
          />
        ))}
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button className="flex items-center justify-center border border-zinc-600 pointer-events-auto px-5 py-1 rounded-full bg-zinc-800 text-white text-sm  shadow-lg transition hover:cursor-pointer ">
            Meet our customers
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </button>
        </div>
      )}
    </div>
  );
}

export default CarouselPage;
