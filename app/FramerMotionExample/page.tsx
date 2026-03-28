"use client"

import PaymentModal from "@/components/PaymentModal"
import { motion } from "framer-motion"
import { useState } from "react"

export default function AnimationPage() {

  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ padding: "40px" }}
    >

      <h1>Framer Motion Demo</h1>

      {/* Animated Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 250,
          height: 150,
          background: "#4f46e5",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          cursor: "pointer",
          marginTop: 30
        }}
        onClick={() => setOpen(true)}
      >
        Open Payment Modal
      </motion.div>

      {open && <PaymentModal close={() => setOpen(false)} />}

    </motion.div>
  )
}