// import { useEffect, useState } from "react"
// import { fetchUsers } from "@/services/api"
// import { User } from "@/types/user"

// export const useUsers = () => {
//   const [users, setUsers] = useState<User[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const loadUsers = async () => {
//       const data = await fetchUsers()

//       const formatted = data.map((u: any) => ({
//         id: u.id,
//         name: u.name,
//         email: u.email,
//         company: u.company.name
//       }))

//       setUsers(formatted)
//       setLoading(false)
//     }

//     loadUsers()
//   }, [])

//   return { users, loading }
// }

import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "@/services/api"
// import { User } from "@/types/user"

export const useUsers = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await fetchUsers()

      return users.map((u: any) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        company: u.company.name
      }))
    },
    staleTime: 1000 * 60 * 5 // 5 minutes cache
  })

  return {
    users: data ?? [],
    loading: isLoading
  }
}