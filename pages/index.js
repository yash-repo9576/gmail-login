import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <h4>Email: {session.user.email}</h4>
        <button className="h-10 w-52 px-5 mt-2  rounded-full text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline 
        hover:bg-blue-700" onClick={() => signOut()}>Sign out</button>
        
      </>
    )
  }
  return (
    <>
   

      Not signed in <br />
      <button className="h-10 w-52 px-5 mt-2  rounded-full text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline 
        hover:bg-blue-700" onClick={() => signIn()}>Sign in Google </button>
      
    </>
  )
}