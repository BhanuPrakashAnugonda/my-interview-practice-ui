export const updateUser = async (name: string) => {
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({ name })
  })

  return response.json()
}