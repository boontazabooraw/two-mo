"use client";

import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";

const sentences = [
  "Hey...",
  "It's been two months already. Time flies really fast.",
  "I'm not good with words so bear with me.",
  "But if I could paint feelings, you'd be the brightest color on my canvas.",
  "You are the rainbow after an endless storm.",
  "Being with you feels like finding home in a place I never knew I was searching for.",
  "Thank you for being my light, my anchor, my quiet miracle.",
];

function MainComponent() {
  return (
    <ReactLenis root options={{ smoothWheel: true, lerp: 0.07 }}>
      <main className="snap-y snap-mandatory">
        {sentences.map((line, index) => {
          return (
            <section
              key={index}
              className={`h-screen flex justify-center items-center snap-y snap-mandatory 
                ${index > 3 && "bg-[#f2a0dc]"}
                ${index > 5 && "bg-black/90 text-white"} `}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  ...(index > 2 && { opacity: 1, background: "#f2a0dc" }),
                }}
                transition={{ duration: 2, ease: "easeIn" }}
                viewport={{ once: true }}
                className="-z-10 absolute h-screen w-full"
              ></motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{}}
                className="text-3xl text-center px-4 snap-center"
              >
                {line}
              </motion.h1>
              {index === 0 && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1, 0] }}
                  transition={{
                    delay: 1,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bottom-20 absolute tracking-widest text-sm"
                >
                  Keep scrolling down, nice and slow.
                </motion.h1>
              )}
            </section>
          );
        })}
      </main>
    </ReactLenis>
  );
}

export default MainComponent;
