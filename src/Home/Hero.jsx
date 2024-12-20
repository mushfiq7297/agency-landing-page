import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../shared/Button";
import { BiCalendarCheck } from "react-icons/bi";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1733257395356"
import animationDataBG from "../assets/Animation - 1733261480402"
const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between w-full md:w-full lg:max-w-6xl mx-auto items-center py-28">
     
      <motion.div
        ref={ref}
        className="w-1/2 flex-col justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <motion.h3
          className="text-primary font-bold text-xl mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to AQUAS Digital
        </motion.h3>
        <motion.h1
          className="text-navyBlue text-5xl font-semibold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.7 }}
        >
          AI Based Digital
        </motion.h1>
        <motion.h1
          className="text-navyBlue text-5xl font-semibold mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.9 }}
        >
          Marketing Agency
        </motion.h1>

        <motion.p
          className="text-lg mb-8 text-navyBlue"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1 }}
        >
          AQUAS Digital- We handle everything from targeted campaigns to
          data–driven insights, ensuring growth and visibility for your
          business in the digital world.
        </motion.p>
        <Button text="Book A Free Consultation" Icon={BiCalendarCheck} />
      </motion.div>

      <motion.div
        className="mx-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div style={{ width: "400px", height: "400px" }}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
