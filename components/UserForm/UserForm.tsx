"use client"

import { useState, useEffect } from "react"
import ConfirmModal from "../Modal/ConfirmModal"
import { updateUser } from "@/services/userApi"

export default function UserForm() {
  const [name, setName] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState("")

  useEffect(() => {
    if (status === "success") {
      console.log("User updated successfully")
    }
  }, [status])

  const handleSubmit = () => {
    setShowModal(true)
  }

  const confirmUpdate = async () => {
    const result = await updateUser(name)
    setStatus(result.message)
    setShowModal(false)
  }

  return (
    <div>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>

      {status && <p data-testid="status">{status}</p>}

      <ConfirmModal
        open={showModal}
        onConfirm={confirmUpdate}
        onCancel={() => setShowModal(false)}
      />

    </div>
  )
}