"use client";
import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      animate={{
        backgroundPositionX: starBg.width,
        // backgroundPositionY: starBg.height,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 30,
      }}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starBg.src})`,
        backgroundPositionY,
      }}
    >
      {/* Radial Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 75% at center center, rgba(140, 69, 255, 0.5) 15%, rgba(14, 0, 36, 0.5) 78%, transparent)",
        }}
      ></div>

      {/* Planet in the Center */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      {/* Rings around the planet */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      >
        {/* Small Dot Inside Ring */}
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "-1turn",
          }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full bg-white rounded-full border border-white -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed z-0"></div>

      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border rounded-full opacity-20 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Main Content */}
      <div className="container relative mt-16 z-20">
        {" "}
        {/* Increased z-index to ensure text is above the planet */}
        <h1 className="text-8xl md:text-[169px] md:leading-none font-semibold tracking-tighter text-transparent bg-clip-text text-center bg-gradient-to-tl from-white to-[rgba(74,32,138,0.5)]">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
          Elevate your site&#39;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
