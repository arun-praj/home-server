import Image from 'next/image'
import Nav from '../components/Nav'

export default function Home() {
   return (
      <div className=' dark '>
         <main className=' h-full w-full font-quattro '>
            <Nav />
            <article className=' max-w-[75ch] m-auto pt-12 pb-28 px-5'>
               <div className=' h-16'></div>
               <h1 className='text-3xl text-white font-bold mt-8 mb-5'>Hi, I&apos;m Arun</h1>
               <p>I&apos;m a software developer. I&apos;m currently working as a fullstack developer at Cotiviti Pvt Ltd, Hattisar. </p>
               <p>{`If you wish to reach out,find me here ;)`} </p>

               <div className='my-4 flex gap-2'>
                  <a
                     href='https://github.com/arun-praj'
                     target={'_blank'}
                     rel='noreferrer'
                     className='link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer'
                  >
                     Github
                  </a>
                  <a
                     href='https://www.linkedin.com/in/arun-prajapati-04403317a/'
                     target={'_blank'}
                     rel='noreferrer'
                     className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer'
                  >
                     Linkedin
                  </a>
                  <a
                     target={'_blank'}
                     rel='noreferrer'
                     href='mailto:arunkp1122@gmail.com?subject=Hey%20Arun,'
                     className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer'
                  >
                     Email
                  </a>
               </div>
               <div className='h-4'></div>
               <div>
                  <h2 className=' text-xl text-white  mt-8 mb-5 font-semibold'>Experience</h2>
                  <li
                     className='pb-2 pl-0 mb-4  border-[rgb(28,25,23)] before:contents'
                     style={{
                        borderBottomWidth: '1px',
                     }}
                  >
                     <section>
                        <h3>Fullstack Developer</h3>
                        <div className='flex justify-between text-sm'>
                           <a href='https://www.cotiviti.com.np/' target={'_blank'} rel='noreferrer' className=' hover:text-[rgb(234,179,8)]'>
                              <span className='flex items-center gap-1'>
                                 Cotiviti Nepal Pvt. Ltd.
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-external-link'
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
                              </span>
                           </a>
                           <h4> Aug 2022 - Current</h4>
                        </div>
                        <p className='mt-4 mb-4 text-sm' id='projects'>
                           Working as a fullstack developer.
                        </p>
                     </section>
                  </li>
                  <li
                     className='pb-2 pl-0 mb-4  border-[rgb(28,25,23)] before:contents'
                     style={{
                        borderBottomWidth: '1px',
                     }}
                  >
                     <section>
                        <h3>Fullstack Developer Intern</h3>
                        <div className='flex justify-between text-sm'>
                           <a href='https://www.cotiviti.com.np/' target={'_blank'} rel='noreferrer' className=' hover:text-[rgb(234,179,8)]'>
                              <span className='flex items-center gap-1'>
                                 Cotiviti Nepal Pvt. Ltd.
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-external-link'
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
                              </span>
                           </a>
                           <h4> March 2022 - May 2022</h4>
                        </div>
                        <p className='mt-4 mb-4 text-sm' id='projects'>
                           Developed a Synchron app where users fill up daily standups of their meeting using Django,Postgres &amp; next.js.
                        </p>
                     </section>
                  </li>
               </div>
               <div className='h-4'></div>
               <div>
                  <h2 className=' text-xl text-white font-semibold mt-8 mb-5'>Projects</h2>
                  <li
                     className='pb-2 pl-0 mb-4  border-[rgb(28,25,23)] before:contents'
                     style={{
                        borderBottomWidth: '1px',
                     }}
                  >
                     <section>
                        <div className='flex justify-between text-sm gap-3'>
                           <h3 className=' text-left font-medium'>Skin cancer Classification</h3>
                           <div className='flex gap-3 text-sm'>
                              <a
                                 target={'_blank'}
                                 rel='noreferrer'
                                 href='https://github.com/izenish/SkinCancerDetection'
                                 className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px] flex items-center gap-1'
                              >
                                 <span>Source</span>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-code hover:text-black'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='#b0b0b0'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <polyline points='7 8 3 12 7 16' />
                                    <polyline points='17 8 21 12 17 16' />
                                    <line x1='14' y1='4' x2='10' y2='20' />
                                 </svg>
                              </a>
                           </div>
                        </div>
                        <div className=' text-sm  mt-1'>
                           <Image src={'/icons/python.svg'} alt='react' height='14px' width={14} />
                        </div>
                        <p className='mt-4 mb-4 text-sm'>Final year project on classifying image into 7 different type of skin cancers. </p>
                     </section>
                  </li>
                  <li
                     className='pb-2 pl-0 mb-4  border-[rgb(28,25,23)] before:contents'
                     style={{
                        borderBottomWidth: '1px',
                     }}
                  >
                     <section>
                        <div className='flex justify-between text-sm gap-3'>
                           <h3 className=' text-left font-medium'>Comparative study of Algorithms used in Sentiment Analysis</h3>
                           <div className='flex gap-3 text-sm'>
                              <a
                                 target={'_blank'}
                                 rel='noreferrer'
                                 href='https://github.com/arun-praj/Sentiment-Analysis'
                                 className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px] flex items-center gap-1'
                              >
                                 <span>Source</span>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-code hover:text-black'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='#b0b0b0'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <polyline points='7 8 3 12 7 16' />
                                    <polyline points='17 8 21 12 17 16' />
                                    <line x1='14' y1='4' x2='10' y2='20' />
                                 </svg>
                              </a>
                           </div>
                        </div>
                        <div className=' text-sm  mt-1'>
                           <Image src={'/icons/python.svg'} alt='react' height='14px' width={14} />
                        </div>
                        <p className='mt-4 mb-4 text-sm'>
                           We compared 7 different algorithms that can be used for sentiment analysis. And determined best algorithm for binary
                           sentiment classification.{' '}
                        </p>
                     </section>
                  </li>
                  <li
                     className='pb-2 pl-0 mb-4  border-[rgb(28,25,23)] before:contents'
                     style={{
                        borderBottomWidth: '1px',
                     }}
                  >
                     <section>
                        <div className='flex justify-between text-sm'>
                           <h3 className=' font-medium'>Marriage (card game) Point Calculator</h3>
                           <div className='flex gap-3 text-sm'>
                              <a
                                 target={'_blank'}
                                 rel='noreferrer'
                                 href='https://github.com/arun-praj/marriage-card-point-calculator'
                                 className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px] flex items-center gap-1'
                              >
                                 <span>Source</span>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-code hover:text-black'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='#b0b0b0'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <polyline points='7 8 3 12 7 16' />
                                    <polyline points='17 8 21 12 17 16' />
                                    <line x1='14' y1='4' x2='10' y2='20' />
                                 </svg>
                              </a>
                              <a
                                 target={'_blank'}
                                 rel='noreferrer'
                                 href='https://marriage-card-point-calculator.herokuapp.com/'
                                 className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px] flex items-center gap-1'
                              >
                                 <span>Live</span>

                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-activity'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='#b0b0b0'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <path d='M3 12h4l3 8l4 -16l3 8h4' />
                                 </svg>
                              </a>
                           </div>
                        </div>
                        <div className=' text-sm  mt-1'>
                           <Image src={'/icons/react.svg'} alt='react' height='14px' width={14} />
                        </div>
                        <p className='mt-4 mb-4 text-sm'>
                           If you ever played marriage card game, you know it&apos;s hard and time consuming to calculate and keep track of points of
                           each and every player especially if you are amateure like me &#128517;. So i created this app to easily keep track of
                           points of every round.
                        </p>
                     </section>
                  </li>
                  <li
                     className='pb-2 pl-0 mb-4  border-[rgb(28,25,23)] before:contents'
                     style={{
                        borderBottomWidth: '1px',
                     }}
                  >
                     <section>
                        <div className='flex justify-between text-sm'>
                           <h3 className='font-medium'>DairyEcommerce</h3>
                           <div className='flex gap-3 text-sm'>
                              <a
                                 target={'_blank'}
                                 rel='noreferrer'
                                 href='https://github.com/arun-praj/DairyEcommerce'
                                 className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px] flex items-center gap-1'
                              >
                                 <span>Source</span>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-code hover:text-black'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='#b0b0b0'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <polyline points='7 8 3 12 7 16' />
                                    <polyline points='17 8 21 12 17 16' />
                                    <line x1='14' y1='4' x2='10' y2='20' />
                                 </svg>
                              </a>
                              <a
                                 target={'_blank'}
                                 rel='noreferrer'
                                 href='https://github.com/arun-praj/DairyEcommerce'
                                 className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px] flex items-center gap-1'
                              >
                                 <span>Live</span>

                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-activity'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='#b0b0b0'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <path d='M3 12h4l3 8l4 -16l3 8h4' />
                                 </svg>
                              </a>
                           </div>
                        </div>
                        <div className=' text-sm flex gap-2 mt-1'>
                           <Image src={'/icons/mongodb.svg'} alt='react' height='14px' width={14} />
                           <Image src={'/icons/react.svg'} alt='react' height='14px' width={14} />
                           <Image src={'/icons/nodejs-icon.svg'} alt='react' height='14px' width={14} />
                        </div>
                        <p className='mt-4 mb-4 text-sm'>Ecommerce app to buy dairy products.</p>
                     </section>
                  </li>
                  <li
                     className='pb-2 pl-0 mb-4  border-[rgb(28,25,23)] before:contents'
                     style={{
                        borderBottomWidth: '1px',
                     }}
                  >
                     <section>
                        <div className='flex justify-between text-sm'>
                           <h3 className='font-medium'>Calendar</h3>
                           <div className='flex gap-3 text-sm'>
                              <a
                                 target={'_blank'}
                                 rel='noreferrer'
                                 href='https://github.com/kkritii/calendar'
                                 className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px] flex items-center gap-1'
                              >
                                 <span>Source</span>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-code hover:text-black'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='#b0b0b0'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <polyline points='7 8 3 12 7 16' />
                                    <polyline points='17 8 21 12 17 16' />
                                    <line x1='14' y1='4' x2='10' y2='20' />
                                 </svg>
                              </a>
                           </div>
                        </div>
                        <div className=' text-sm flex gap-2 mt-1'>
                           <Image src={'/icons/C_Programming_Language.svg'} alt='react' height='14px' width={14} />
                        </div>
                        <p className='mt-4 mb-4 text-sm' id='education'>
                           Built a Gregorian calendar from scratch using C. It also has feature of adding memo
                        </p>
                     </section>
                  </li>
                  <li
                     className='pb-2 pl-0 mb-4  border-[rgb(28,25,23)] before:contents'
                     style={{
                        borderBottomWidth: '1px',
                     }}
                  >
                     <section>
                        <div className='flex justify-between text-sm'>
                           <h3 className='font-medium'>Portfolio</h3>
                           <div className='flex gap-3 text-sm'>
                              <a
                                 target={'_blank'}
                                 rel='noreferrer'
                                 href='https://github.com/arun-praj/portfolio'
                                 className=' link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px] flex items-center gap-1'
                              >
                                 <span>Source</span>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-code hover:text-black'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='#b0b0b0'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 >
                                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                    <polyline points='7 8 3 12 7 16' />
                                    <polyline points='17 8 21 12 17 16' />
                                    <line x1='14' y1='4' x2='10' y2='20' />
                                 </svg>
                              </a>
                           </div>
                        </div>
                        <div className=' text-sm flex gap-2 mt-1 bg-white w-[14px] rounded-full'>
                           <Image src={'/icons/nextjs-icon.svg'} title='Next Js' alt='react' height='14px' width={14} />
                        </div>
                        <p className='mt-4 mb-4 text-sm' id='education'>
                           This Webpage you are looking at. Plus you can visit subdomains.
                           <br />
                           <a
                              target={'_blank'}
                              rel='noreferrer'
                              href='https://bookmark.arunprajapati.com.np'
                              className='w-full link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px]  items-center gap-1'
                           >
                              bookmark.arunprajapati.com.np
                           </a>
                           ,
                           <a
                              target={'_blank'}
                              rel='noreferrer'
                              href='https://bookmark.arunprajapati.com.np'
                              className='w-full link-btn hover:bg-[rgb(234,179,8)] hover:text-[rgb(41,37,36)] cursor-pointer px-[8px] py-[1px] break-words items-center gap-1'
                           >
                              movie.arunprajapati.com.np
                           </a>
                           .
                        </p>
                     </section>
                  </li>
               </div>

               <div className='h-4'></div>

               {/* TIMELINE */}
               <div>
                  <h2 className=' text-xl text-white font-semibold mt-8 mb-5'>Education and training</h2>
                  <h3 className=' font-medium  text-lg mt-16'>2022</h3>

                  <div className='flex gap-3 text-sm  items-center my-8'>
                     <div className=' mr-8 min-w-[50px]'>15 Aug</div>
                     <div className='link-btn'> Bachelors of Computer Engineering, Khwopa Engineering College | Libali, Bhaktapur </div>
                  </div>
                  <h3 className=' font-medium  text-lg mt-8'>2021</h3>
                  <div className='flex gap-3 text-sm  items-center my-8'>
                     <div className=' mr-8 min-w-[50px]'>5 April</div>
                     <div className='link-btn'> Python3: Deepdive series, Udemy</div>
                  </div>
                  <div className='flex gap-3 text-sm  items-center my-8'>
                     <div className=' mr-8 min-w-[50px]'>10 Mar</div>
                     <div className='link-btn'> 15 hours training on Python, Khwopa Engineering College </div>
                  </div>
                  <h3 className=' font-medium  text-lg mt-8'>2019</h3>
                  <div className='flex gap-3 text-sm  items-center my-8'>
                     <div className=' mr-8 min-w-[50px]'>17 Dec</div>
                     <div className='link-btn'> 30 hours training on JAVA, Khwopa Engineering College </div>
                  </div>
                  <h3 className=' font-medium  text-lg mt-8'>2017</h3>

                  <div className='flex gap-3 text-sm  items-center my-8'>
                     <div className=' mr-8 min-w-[50px]'>2017</div>
                     <div className='link-btn'> +2 Science, Khwopa Higher Secondary School | Dekocha, Bhaktapur </div>
                  </div>
                  <h3 className=' font-medium  text-lg mt-8'>2015</h3>

                  <div className='flex gap-3 text-sm  items-center my-8'>
                     <div className=' mr-8 min-w-[50px]'>2015</div>
                     <div className='link-btn'> SLC, Mount Valley English School | Kwathando, Bhaktapur </div>
                  </div>
               </div>
            </article>
         </main>
         <footer className={''}></footer>
      </div>
   )
}
