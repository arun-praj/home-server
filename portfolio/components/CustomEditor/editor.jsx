import React, { useRef, useState, useCallback, useEffect } from 'react'

import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './NoSSRConstants'
import { useRouter } from 'next/router'
const Editor = ({ query }) => {
   const ReactEditorJS = createReactEditorJS()
   // const [locked, setLocked] = useState(true)

   const editorCore = useRef(null)
   const titleRef = useRef(null)
   const router = useRouter()
   const [initialData, setInitialData] = useState({
      blocks: [
         {
            id: 'sheNwCUP5A',
            type: 'header',
            data: {
               level: 3,
            },
         },
      ],
   })
   const [saveState, setSaveState] = useState('Publish')

   async function searchNote() {
      const foundNote = await fetch(
         `/api/note?note_id=${query?.note_id}`,
         {
            method: 'GET',
         }
      )
      const data = await foundNote.json()
      if (data.success) {
         setInitialData(data?.note?.content)
         titleRef.current.innerText = data?.note.title
      }
   }

   useEffect(() => {
      if (query?.note_id?.length > 0 && query.note_id !== 'new-note') {
         searchNote()
      }
   }, [query.note_id])

   const handleSave = useCallback(async () => {
      if (titleRef.current.innerText.length < 1) {
         titleRef.current.style.borderColor = 'red'
         return
      } else {
         titleRef.current.style.borderColor = '#3f3f3f'
      }
      setSaveState('Publishing')
      const savedData = await editorCore.current.save()
      const createdNote = await fetch('/api/note', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            content: savedData,
            title: titleRef.current.innerText,
            note_id: query?.note_id,
         }),
      })
      const data = await createdNote.json()
      if (data.success) {
         router.push(`/${data?.note.id}`)
         setSaveState('Published')
      } else {
         setSaveState('Failed')
      }
   })

   const handleInitialize = useCallback((instance) => {
      editorCore.current = instance
   }, [])

   return (
      <section>
         <div className=' max-w-[820px]  m-auto h-[200px] mt-8 flex flex-col'>
            {/* <div className='lock-container'>
               <span
                  className={locked ? 'lock' : 'lock unlocked'}
                  onClick={() => {
                     setLocked(!locked)
                  }}></span>
            </div> */}
            <div className='flex justify-between'>
               <button
                  onClick={() => router.push('/')}
                  className='text-sm  items-center  text-white py-1 px-4'>
                  Back
               </button>
               <button
                  onClick={() => handleSave()}
                  className=' text-sm  items-center  text-white py-1 px-4 rounded-md bg-red-500'>
                  {saveState}
               </button>
            </div>

            <div className=' mt-4 '>
               <p
                  contentEditable={true}
                  ref={titleRef}
                  data-placeholder='Title'
                  className='w-full leading-5 tracking-wide bg-[rgb(29,30,31)] outline-none text-[32px] pt-5  pb-3 text-white border-b-[1px]  border-[#3f3f3f] '></p>

               {typeof window !== 'undefined' &&
                  typeof initialData === 'string' && (
                     <ReactEditorJS
                        // holder='editorjs'
                        onInitialize={handleInitialize}
                        tools={EDITOR_JS_TOOLS}
                        readOnly={false}
                        data={
                           typeof initialData === 'string'
                              ? JSON.parse(initialData)
                              : initialData
                        }
                        defaultValue={initialData}
                        inlineToolbar={true}
                        // onChange={() => saveToLocalStorage()}
                     />
                  )}
               {typeof initialData === 'object' && (
                  <ReactEditorJS
                     // holder='editorjs'
                     onInitialize={handleInitialize}
                     tools={EDITOR_JS_TOOLS}
                     readOnly={false}
                     data={
                        typeof initialData === 'string'
                           ? JSON.parse(initialData)
                           : initialData
                     }
                     defaultValue={initialData}
                     inlineToolbar={true}
                     // onChange={() => saveToLocalStorage()}
                  />
               )}
            </div>
         </div>
      </section>
   )
}

export default Editor
