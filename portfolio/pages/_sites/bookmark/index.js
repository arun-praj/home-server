// import Nav from '../../components/Nav'
import React from 'react'
import Card from '../../../components/Card'
import { resources } from '../../../data/resources'
export default function Home() {
   return (
      <React.StrictMode>
         <div className='dark'>
            <main className=' h-full w-full'>
               {/* <Nav /> */}
               <article className=' max-w-[75ch] m-auto pt-6 pb-28 px-5'>
                  <h1 className='text-3xl text-white font-bold mt-12 mb-5'>
                     Bookmark
                  </h1>
                  <p>
                     {
                        '  Tools, resources and sites that I use for web development and more ;). Feel free to use them. '
                     }{' '}
                  </p>
                  <div className='h-4'></div>
                  <div>
                     {resources.map((resource, index) => {
                        return (
                           <div key={resource.id}>
                              <div className={index !== 2 ? 'hidden' : ''}>
                                 <div className=' h-4'></div>
                                 <h1 className='text-3xl text-white font-bold mt-8 mb-5'>
                                    Before we go any further.
                                 </h1>
                                 <p>
                                    <i>
                                       {
                                          ' "Please note that this website doesnot host any copyrighted content. This list is only for informational and eductional purposes. I am not liable for any damages  resulting from the use of information from this site."'
                                       }
                                    </i>
                                 </p>
                                 <div className='h-4'></div>
                              </div>
                              <h2 className=' text-xl text-white  mt-8 mb-5 font-semibold'>
                                 {resource.section}
                              </h2>
                              {resource?.cards?.map((card) => {
                                 return (
                                    <div key={card.id}>
                                       <Card data={card} />
                                    </div>
                                 )
                              })}
                              <div className='h-4'></div>
                           </div>
                        )
                     })}
                  </div>
               </article>
            </main>
         </div>
      </React.StrictMode>
   )
}
