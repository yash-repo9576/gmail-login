import { useSession } from 'next-auth/react';

export default function Profile() {
  const [session, loading] = useSession();

  if (loading) return <p>Loading...</p>;

  if (!session) return <p>You are not authenciated</p>;

  return <p>You are authenciated</p>;
}