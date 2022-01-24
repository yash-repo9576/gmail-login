import { useSession, signIn, signOut } from "next-auth/react"
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import App from '../components/App'
export default function Home() {
  const { data: session } = useSession();
  if (session) {
    // console.log(session)
    return (
      <App Session={session}/>
      )
  }
  return (
    <>
     <div className='2xl:container  w-screen bg-gradient-to-r from-slate-300 via-purple-100 to-slate-300 flex flex-col items-center  justify-center content-center h-screen'>
        <div className='flex flex-col items-center bg-slate-300 max-w-2xl h-1/2 justify-center content-center rounded-md border-black contrast-100 opacity-90' >
         <h1 className='text-xl antialiased font-bold flex mt-1'>User Login</h1>
       
          <div className='px-4 ml-4 mr-4 flex items-center border-1
            bg-white shadow-sm rounded-full mt-11'>
            <div className='p-1'>
              <FontAwesomeIcon icon={faUser} />

            </div>
            <input className='flex rounded-full py-2 px-6 text-gray-800 leading-tight focus:outline-none' 
            name='username'
            type="text"  placeholder='Username'></input> 
          </div>
      
          <div className='px-4 ml-4 mr-4 flex items-center border-1
          bg-white shadow-sm rounded-full mt-2'>
            <div className='p-1'>
              <FontAwesomeIcon icon={faLock} />
          </div>
            <input className=' flex rounded-full py-2 px-6 text-gray-800 leading-tight focus:outline-none' type="password" name='password' 
            placeholder='Password'></input> 
          
          </div>
      
          <button className="h-10 w-52 px-5 mt-4  rounded-full text-white transition-colors duration-150 bg-slate-600 focus:shadow-outline 
            hover:bg-slate-700">Sign In</button>
          <button className="h-10 w-52 px-5 mt-2 mb-4  rounded-full text-white transition-colors duration-150 bg-slate-600 focus:shadow-outline 
            hover:bg-slate-700" onClick={() => signIn('google')}>Sign In using Google</button>
        </div>
      </div>
    </>
  )
}