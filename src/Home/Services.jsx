import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../shared/Button";
import { BsEye } from "react-icons/bs";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <div className="w-full md:w-full lg:max-w-6xl mx-auto py-28">
      <motion.div
        ref={ref}
        className="w-full flex-col"
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 1 }}
      >
        <motion.h3
          className="text-primary font-bold text-xl mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          What we do
        </motion.h3>
        <motion.h1
          className="text-navyBlue text-4xl font-semibold mb-4 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.7 }}
        >
          We Make Automations
        </motion.h1>
        <motion.h1
          className="text-navyBlue text-4xl font-semibold mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.9 }}
        >
          that lead and inspire
        </motion.h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 rounded-lg">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="text-center space-y-6 px-5 py-5 rounded-xl border-2"
            initial={{ opacity: 0, y: 50 }} 
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
            transition={{ duration: 0.9, delay: 0.4 * index }}
          >
            <img
              src="https://octopi-digital.com/wp-content/uploads/2024/08/icons8-rocket-100.png"
              alt="service icon"
              className="mx-auto rounded-full p-4"
            />
            <h1 className="text-primary text-2xl font-bold">Web Development</h1>
            <p className="text-navyBlue">
              Developing user-friendly, responsive websites that employ
              cutting-edge technology and creativity to realize your vision.
            </p>
            <motion.button
              className="text-primary text-lg font-bold pb-5"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>

      <div className="my-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2 }}
        >
          <Button text="See More" Icon={BsEye} />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
