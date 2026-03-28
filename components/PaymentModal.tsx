"use client"

import { motion } from "framer-motion"

interface Props {
  close: () => void
}

export default function PaymentModal({ close }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "white",
          padding: 30,
          borderRadius: 10,
          width: 300
        }}
      >

        <h2>Payment Success</h2>
        <p>Your transaction completed successfully.</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={close}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            background: "#10b981",
            color: "white",
            border: "none",
            borderRadius: 6
          }}
        >
          Close
        </motion.button>

      </motion.div>

    </motion.div>
  )
}