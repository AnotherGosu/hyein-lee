import * as motion from "framer-motion/m";
import Image from "next/image";

import heroImage from "@/images/hero.png";

export const Hero = () => {
  return (
    <section className="flex h-svh items-center justify-center">
      <div className="relative flex w-full justify-end">
        <Title />
        <ImageContainer />
      </div>
    </section>
  );
};

const Title = () => {
  return (
    <h1 className="font-heading absolute bottom-0 left-0 z-10 text-7xl uppercase leading-none [text-shadow:_2px_2px_0px_white] xs:text-8xl sm:text-9xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem]">
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hyein
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
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
      transition={{ delay: 1.4, duration: 0.7 }}
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
