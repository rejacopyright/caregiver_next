// Component Imports
import Providers from '@components/Providers'
// Util Imports
import { getServerMode, getSystemMode } from '@core/utils/serverHelpers'
import BlankLayout from '@layouts/BlankLayout'
import NotFound from '@views/NotFound'

const NotFoundPage = async () => {
  // Vars
  const direction = 'ltr'
  const mode = await getServerMode()
  const systemMode = await getSystemMode()

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>
        <NotFound mode={mode} />
      </BlankLayout>
    </Providers>
  )
}

export default NotFoundPage
