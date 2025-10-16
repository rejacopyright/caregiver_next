import CustomIconButton from '@core/components/mui/IconButton'
import { Editor } from '@tiptap/core'
import clsx from 'clsx'

type Props = {
  editor: Editor | null
}

const Index = ({ editor }: Props) => {
  if (!editor) return null

  const buttons = [
    {
      action: () => editor.chain().focus().toggleBold().run(),
      icon: 'ri-bold',
      isActive: editor.isActive('bold'),
    },
    {
      action: () => editor.chain().focus().toggleUnderline().run(),
      icon: 'ri-underline',
      isActive: editor.isActive('underline'),
    },
    {
      action: () => editor.chain().focus().toggleItalic().run(),
      icon: 'ri-italic',
      isActive: editor.isActive('italic'),
    },
    {
      action: () => editor.chain().focus().toggleStrike().run(),
      icon: 'ri-strikethrough',
      isActive: editor.isActive('strike'),
    },
    {
      action: () => editor.chain().focus().setTextAlign('left').run(),
      icon: 'ri-align-left',
      isActive: editor.isActive({ textAlign: 'left' }),
    },
    {
      action: () => editor.chain().focus().setTextAlign('center').run(),
      icon: 'ri-align-center',
      isActive: editor.isActive({ textAlign: 'center' }),
    },
    {
      action: () => editor.chain().focus().setTextAlign('right').run(),
      icon: 'ri-align-right',
      isActive: editor.isActive({ textAlign: 'right' }),
    },
    {
      action: () => editor.chain().focus().setTextAlign('justify').run(),
      icon: 'ri-align-justify',
      isActive: editor.isActive({ textAlign: 'justify' }),
    },
  ]

  return (
    <div className='flex flex-wrap gap-x-3 gap-y-1 pbs-3 pbe-2 pli-3'>
      {buttons.map((btn, index) => (
        <CustomIconButton
          key={index}
          onClick={btn.action}
          {...(btn.isActive && { color: 'primary' })}
          variant='outlined'
          size='small'>
          <i className={clsx(btn.icon, { 'text-textSecondary': !btn.isActive })} />
        </CustomIconButton>
      ))}
    </div>
  )
}

export default Index
