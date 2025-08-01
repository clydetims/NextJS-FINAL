// // hooks/useSession.ts
// 'use client';
// import { useEffect, useState } from 'react';

// export function useSession() {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     fetch('/api/auth/session', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(res => res.json())
//       .then(data => {
//         setUser(data.user || null);
//       });
//   }, []);

//   return { user };
// }

// /hooks/useSession.ts

'use client';
import { useEffect, useState } from 'react';

export function useSession() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch('/api/auth/session')
      .then(res => res.json())
      .then(data => {
        setUser(data.user || null);
      })
      .catch(() => setUser(null));
  }, []);

  return { user };
}
