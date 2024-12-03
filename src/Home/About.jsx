import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../shared/Button";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1733257976767"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row justify-between w-full md:w-full  lg:max-w-6xl mx-auto items-center py-28 gap-10"
    >
      <motion.div
        className="mx-auto flex justify-start"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
       <div style={{ width: "400px", height: "400px" }}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      </motion.div>

      <motion.div
        className="w-1/2 flex-col justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <motion.h3
          className="text-primary font-bold text-xl mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          About us
        </motion.h3>
        <motion.h1
          className="text-navyBlue text-4xl font-semibold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.7 }}
        >
          AQUAS Digital - Best AI Based Digital Marketing Agency Since 2017
        </motion.h1>

        <motion.p
          className="text-lg mb-8 text-navyBlue"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1 }}
        >
          At AQUAS Digital, we transcend traditional boundaries, ushering in a
          new era of digital marketing excellence. We are not just a digital
          marketing agency; we are architects of cutting-edge AI solutions,
          crafting bespoke strategies to elevate your brand in the digital
          landscape.
        </motion.p>
        <Button text="Learn More" />
      </motion.div>
    </div>
  );
};

export default About;
