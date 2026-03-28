"use client"

import { useMemo, useState } from "react"
import TableRow from "./TableRow"
import { User } from "@/types/user"

interface Props {
  users: User[]
  search: string
}

export default function Table({ users, search }: Props) {
    
    const [sortKey, setSortKey] = useState<keyof User>("name")
    const [direction, setDirection] = useState<"asc" | "desc">("asc")
    const handleSort = (key: keyof User) => {
        if (key === sortKey) {
        setDirection(direction === "asc" ? "desc" : "asc")
        } else {
        setSortKey(key)
        setDirection("asc")
        }
  }
  const filteredUsers = useMemo(() => {
    let filteredUsersTest = users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    )

    return filteredUsersTest.sort((a,b)=>{
        let valA = a[sortKey].toString().toLowerCase();
        let valB = b[sortKey].toString().toLowerCase();

        if(valA < valB) return direction === "asc" ? -1 :1
        if(valA > valB) return direction === "asc" ? 1 :-1
        return 0
    })
  }, [users, search, sortKey, direction])

  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2" onClick={() => handleSort("name")}>Name</th>
          <th onClick={() => handleSort("email")}>Email</th>
          <th onClick={() => handleSort("company")}>Company</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {filteredUsers.map((user) => (
          <TableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  )
}