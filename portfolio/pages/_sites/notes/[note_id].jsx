import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const DynamicEditor = dynamic(
   () => import('../../../components/CustomEditor/editor'),
   {
      ssr: false,
   }
)

export default function Index() {
   const router = useRouter()
   return (
      <div className='flex h-screen text-sm overflow-x-hidden bg-[rgb(29,30,31)] overflow-y-scroll  scrollbar '>
         <div className=' max-w-5xl  px-6 mx-auto w-full  '>
            {<DynamicEditor query={router.query} />}
         </div>
      </div>
   )
}
