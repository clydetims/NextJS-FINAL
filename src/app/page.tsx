'use client';
import { useSession } from '@/hooks/useSession';

export default function Home() {
  const { user } = useSession(); // ✅ Fix here

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Hello world
      {user ? <div>{user.role}</div> : <div>Loading...</div>}
    </div>
  );
}
