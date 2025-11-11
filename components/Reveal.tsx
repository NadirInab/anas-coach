"use client"

import { ReactNode } from "react"
import { motion, Variants } from "framer-motion"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  stagger?: boolean
}

const container: (delay?: number, duration?: number) => Variants = (delay = 0, duration = 0.8) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
      delay,
      duration,
      ease: "easeOut",
    },
  },
})

const child: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function Reveal({ children, className = "", delay = 0, duration = 0.8, stagger = false }: RevealProps) {
  if (stagger) {
    return (
      <motion.div
        className={className}
        variants={container(delay, duration)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Array.isArray(children)
          ? // wrap direct children so they can stagger
            (children as ReactNode[]).map((childNode, i) => (
              <motion.div key={i} variants={child}>
                {childNode}
              </motion.div>
            ))
          : <motion.div variants={child}>{children}</motion.div>}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
