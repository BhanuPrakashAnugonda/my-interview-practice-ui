'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

// 1. Mock API functions
const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const addUser = async (newUser: any) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
  });
  return res.json();
};

export default function UsersManager() {
  const queryClient = useQueryClient();

  // 2. The Query: Fetches and caches the list
  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // Fresh for 5 minutes
  });

  // 3. The Mutation: Adds a user and invalidates the cache
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // This is the "magic" line that triggers a refetch of the list
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  if (isLoading) return <div>Loading users...</div>;
  if (isError) return <div>Error fetching data!</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Directory</h2>
      <ul>
        {users.map((user: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button 
        onClick={() => mutation.mutate({ name: 'New User' })}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Adding...' : 'Add Random User'}
      </button>
    </div>
  );
}