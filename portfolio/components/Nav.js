import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
   const router = useRouter()

   return (
      <nav className='fixed  h-16 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150  bg-[#0D0D1050]'>
         <div className='  w-full sm:max-w-[75ch] m-auto px-5 flex justify-between items-center'>
            <a href='https://arunprajapati.com.np/#'>ARUN K.Praj</a>
            <div className=' text-sm flex gap-5'>
               <a href='#projects' className=' opacity-50'>
                  Projects
               </a>
               <a href='#education' className=' opacity-50'>
                  Education
               </a>
               {/* 
               <Link href={'https://arunprajapati.com.np/resource'}>
                  <a href='' className=' opacity-50'>
                     Resources
                  </a>
               </Link> */}
            </div>
         </div>
      </nav>
   )
}

export default Nav
