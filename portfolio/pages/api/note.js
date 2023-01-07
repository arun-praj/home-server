// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma'

export default async function handler(req, res) {
   const { query, method, body } = req

   switch (method) {
      case 'GET':
         try {
            if (query.note_id) {
               const foundNote = await prisma.note.findFirst({
                  //@ts-ignore
                  where: { id: query.note_id },
               })
               if (foundNote) {
                  return res
                     .status(200)
                     .json({ note: foundNote, success: true })
               }
               prisma.$disconnect()
               return res.status(404).json({ success: false })
            } else {
               const foundNotes = await prisma.note.findMany({})
               if (foundNotes) {
                  return res
                     .status(200)
                     .json({ notes: foundNotes, success: true })
               }
               prisma.$disconnect()
               return res.status(404).json({ success: false })
            }
         } catch (e) {
            return res.status(404).json({ success: false })
         }
         break

      case 'POST':
         const updateField = {}
         updateField.content = JSON.stringify(body.content)
         if (body.title) {
            updateField.title = body.title
         }

         try {
            const createdNote = await prisma.note.upsert({
               where: { id: body.note_id },
               update: {
                  ...updateField,
               },
               create: {
                  ...updateField,
               },
            })
            prisma.$disconnect()
            res.status(200).json({ success: true, note: createdNote })
         } catch (e) {
            res.status(500).json({
               success: false,
               error: `Something went horrible: ${e}`,
            })
         }
         break
   }
}
