let Header = ''
let Link = ''
let InlineCode = ''
let Codebox = ''
let Code = ''
let List = ''
let Table = ''
if (typeof window !== 'undefined') {
   Header = require('@editorjs/header')
   Link = require('@editorjs/link')
   InlineCode = require('@editorjs/inline-code')
   Code = require('@calumk/editorjs-codeflask')
   Codebox = require('@bomdi/codebox')
   List = require('@editorjs/list')
   Table = require('editorjs-table')
}

// "@editorjs/checklist": "^1.3.0",
// "@editorjs/code": "^2.7.0",
// "@editorjs/delimiter": "^1.2.0",
// "@editorjs/editorjs": "^2.25.0",
// "@editorjs/embed": "^2.5.3",
// "@editorjs/header": "^2.7.0",
// "@editorjs/image": "^2.6.2",
// "@editorjs/list": "^1.8.0",
// "@editorjs/marker": "^1.2.2",
// "@editorjs/quote": "^2.4.0",
// "@editorjs/raw": "^2.3.1",
// "@editorjs/simple-image": "^1.4.1",
// "@editorjs/table": "^2.1.0",
// "@editorjs/warning": "^1.2.0",
export const EDITOR_JS_TOOLS = {
   header: {
      class: Header,
      inlineToolbar: true,
      shortcut: 'CTRL+ALT+H',
      config: {
         placeholder: 'Tell your story...',
         levels: [1, 2, 3],
         defaultLevel: 1,
      },
   },
   list: List,
   // codebox: Codebox,
   code: {
      class: Code,
      shortcut: 'CTRL+ALT+C',
   },
   table: {
      class: Table,
      inlineToolbar: true,
   },
   inLineCode: {
      class: InlineCode,
   },
   link: Link,
}
