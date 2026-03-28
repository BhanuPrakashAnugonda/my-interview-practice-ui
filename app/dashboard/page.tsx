"use client";

import { useState, useCallback } from "react";
import { useUsers } from "@/hooks/useUsers";
import Table from "@/components/Table";
import Search from "@/components/Search";

export default function Dashboard() {
  const { users, loading } = useUsers();

  const [search, setSearch] = useState("");

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4 font-bold">Users Dashboard</h1>
      <Search onSearch={handleSearch} />
      <Table users={users} search={search} />
    </div>
  );
}
