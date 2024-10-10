import * as motion from "framer-motion/m";
import Image from "next/image";

import { cn } from "@/utils/cn";

import heroImage from "@/images/hero.png";

import { Section } from "@/components/common/Typography";

export const Hero = () => {
  return (
    <Section className="mb-20 h-svh items-center justify-center overflow-hidden md:mb-40">
      <div className="relative flex w-full justify-end">
        <Title />
        <ImageContainer />
      </div>
    </Section>
  );
};

const Title = () => {
  return (
    <h1
      className={cn(
        "absolute bottom-0 left-0 z-10 uppercase leading-none [text-shadow:_2px_2px_0px_white]",
        "text-7xl xs:text-8xl sm:text-9xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem]",
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Hyein
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        Lee
      </motion.div>
    </h1>
  );
};

const ImageContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.7 }}
    >
      <Image
        src={heroImage}
        alt="Portrait of Hyein Lee"
        priority
        className="max-h-svh object-cover"
      />
    </motion.div>
  );
};
