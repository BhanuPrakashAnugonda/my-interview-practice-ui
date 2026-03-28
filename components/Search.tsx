"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  onSearch: (value: string) => void
}

export default function Search({ onSearch }: Props) {
const [value, setValue] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null)

//   const handleChange = () => {
//     if (inputRef.current) {
//       onSearch(inputRef.current.value)
//     }
//   }
useEffect(() => {
 const timer = setTimeout(()=>{
    onSearch(value)
 }, 500)
 return ()=>clearTimeout(timer)
}, [value, onSearch])

  return (
    <input
    //   ref={inputRef}
    //   onChange={handleChange}
    value={value}
    onChange={(e:any)=>setValue(e.target.value)}
      placeholder="Search users..."
      className="border p-2 rounded w-full"
    />
  )
}