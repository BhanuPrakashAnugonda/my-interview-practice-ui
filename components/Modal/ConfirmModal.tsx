interface Props {
  open: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmModal({ open, onConfirm, onCancel }: Props) {
  if (!open) return null

  return (
    <div data-testid="modal">
      <p>Are you sure?</p>

      <button onClick={onConfirm}>
        Yes
      </button>

      <button onClick={onCancel}>
        No
      </button>
    </div>
  )
}