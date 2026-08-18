import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className = "", as }) => {
  const reduce = useReducedMotion();
  const MotionTag = as ? motion[as] : motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
};

/* Line-by-line masked reveal used on the hero headline. */
export const MaskedLines = ({ lines, className = "", lineClassName = "" }) => {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ paddingBottom: "0.08em" }}
        >
          <motion.span
            className={`block ${lineClassName}`}
            initial={reduce ? false : { y: "110%" }}
            animate={reduce ? {} : { y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15 + i * 0.12,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
