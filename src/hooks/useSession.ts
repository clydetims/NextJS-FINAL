'use client';
import { useEffect, useState } from 'react';

interface User {
  id: string;
  role: string;
  first_name: string;
  last_name: string;
  email?: string;
  // add more fields as needed
}

interface SessionData {
  user: User | null;
}

export function useSession() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/auth/session')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch session');
        }
        return res.json() as Promise<SessionData>;
      })
      .then(data => {
        setUser(data.user);
        setError(null);
      })
      .catch(err => {
        setUser(null);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const isAuthenticated = Boolean(user);

  return { user, isLoading, error, isAuthenticated };
}
