import Image from 'next/image'

const Card = ({ data: { title, image, description, tags, favourite, link, extraDescription } }) => {
   return (
      <div
         className='pb-2 pl-0 mb-4  border-[rgb(28,25,23)] before:contents   '
         style={{
            borderBottomWidth: '1px',
         }}
      >
         <a href={link} target='_blank' rel='noreferrer' className='group cursor-pointer motion-safe:hover:animate-pulse'>
            <div className='flex gap-6 '>
               <div>
                  <Image src={image} height={90} width={90} layout='fixed' alt='Company logo' className='rounded-lg border-none ' />
               </div>
               <div className=' w-full'>
                  <div className='flex justify-between items-center'>
                     <div className='flex items-center text-sm gap-3'>
                        <h3 className=' text-lg font-semibold'>{title}</h3>
                        <span className=' text-xs opacity-50'>{extraDescription && extraDescription}</span>

                        <svg
                           // className=" "
                           xmlns='http://www.w3.org/2000/svg'
                           className='icon icon-tabler icon-tabler-external-link hidden group-hover:inline'
                           width='14'
                           height='14'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='#b0b0b0'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                           <path d='M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5' />
                           <line x1='10' y1='14' x2='20' y2='4' />
                           <polyline points='15 4 20 4 20 9' />
                        </svg>
                     </div>
                     <div className={!favourite ? 'hidden' : ''}>
                        <Image src={'/icons/heart.svg'} title='Editors choice' height='12' width={'12'} alt='heart logo' />
                     </div>
                  </div>

                  <div className=' text-sm  mt-1'>
                     <span> {description}</span>
                  </div>
                  <div className='mt-4 mb-4 text-sm '>
                     {tags &&
                        tags.map((tag) => (
                           <span key={tag} className=''>
                              {tag} &nbsp;
                           </span>
                        ))}
                  </div>
               </div>
            </div>
         </a>
      </div>
   )
}

export default Card
