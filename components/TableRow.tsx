import React from "react"
import { User } from "@/types/user"

interface Props {
  user: User
}

function TableRow({ user }: Props) {
  return (
    <tr className="border-b">
      <td className="p-2">{user.name}</td>
      <td className="p-2">{user.email}</td>
      <td className="p-2">{user.company}</td>
      <td className="p-2 text-blue-500 cursor-pointer">View</td>
    </tr>
  )
}

export default React.memo(TableRow)