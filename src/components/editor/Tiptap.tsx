import { useEffect } from 'react'

import Divider from '@mui/material/Divider'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'

import EditorToolbar from './TiptapToolbar'

import '@styles/tiptapEditor.css'

type Props = {
  placeholder?: string
  content?: string
  editable?: boolean
  onChange?: (content: string) => void
  height?: number | string
}

const Index = ({
  placeholder = 'Type here...',
  content = '',
  editable = true,
  onChange,
  height = 200,
}: Props) => {
  const editor = useEditor({
    content,
    editable,
    extensions: [
      StarterKit.configure({ underline: false }),
      Placeholder.configure({ placeholder }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Underline,
    ],
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
  })

  // Optional: reinitialize content if prop changes
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  return (
    <div className='border-xxx rounded'>
      <EditorToolbar editor={editor} />
      <Divider className='mli-5' />
      <EditorContent
        editor={editor}
        style={{ height }}
        className='bs-[135px] overflow-y-auto flex'
      />
    </div>
  )
}

export default Index
