import Router from 'next/router'
import prisma from '../../../lib/prisma'

const Index = ({ notes }) => {
   return (
      <div>
         <button onClick={() => Router.push('/new-note')}>
            Add new note
         </button>
         {notes.map((data) => {
            return (
               <div
                  key={data.id}
                  className='py-2 px-2 border-b-[1px] w-full border-[#dcdadb]'>
                  <a href={`/${data.id}`}>{data.title}</a>
               </div>
            )
         })}
      </div>
   )
}
export async function getStaticProps() {
   const notes = await prisma.note.findMany({})
   return {
      props: {
         notes: JSON.parse(JSON.stringify(notes)),
      },
      revalidate: 10,
   }
}
export default Index
