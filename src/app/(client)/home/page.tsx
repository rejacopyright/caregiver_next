// Component Imports
// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import LandingPageWrapper from '@views/front-pages/landing-page'

const Index = async () => {
  // Vars
  const mode = await getServerMode()

  return <LandingPageWrapper mode={mode} />
}

export default Index
