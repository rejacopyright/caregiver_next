// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'
import useVerticalNav from '@menu/hooks/useVerticalNav'

const NavToggle = () => {
  // Hooks
  const { toggleVerticalNav } = useVerticalNav()
  const { isBreakpointReached } = useHorizontalNav()

  // Toggle Vertical Nav
  const handleClick = () => {
    toggleVerticalNav()
  }

  return (
    <>
      {/* <i className='ri-menu-line text-xl' onClick={handleClick} /> */}
      {/* Comment following code and uncomment this code in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && (
        <i className='ri-menu-line text-xl cursor-pointer' onClick={handleClick} />
      )}
    </>
  )
}

export default NavToggle
