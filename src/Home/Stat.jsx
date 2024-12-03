
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Stat = () => {

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <div className="flex flex-col md:flex-row lg:flex-row w-full md:w-full lg:max-w-6xl text-center md:justify-between mx-auto py-16 gap-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-5xl font-semibold text-primary mb-4">
          <CountUp start={0} end={125} duration={3} suffix="+" />
        </h1>
        <p className="text-2xl text-white">Project Completed</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h1 className="text-5xl font-semibold text-primary mb-4">
          <CountUp start={0} end={60} duration={3} suffix="+" />
        </h1>
        <p className="text-2xl text-white">Clients</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h1 className="text-5xl font-semibold text-primary mb-4">
          <CountUp start={0} end={7} duration={3} suffix="+" />
        </h1>
        <p className="text-2xl text-white">Years of Experience</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h1 className="text-5xl font-semibold text-primary mb-4">
          <CountUp start={0} end={30} duration={3} suffix="+" />
        </h1>
        <p className="text-2xl text-white">Trusted Partners</p>
      </motion.div>
    </div>
  );
};

export default Stat;
