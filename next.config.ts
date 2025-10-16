import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      // {
      //   source: '/',
      //   destination: '/en/home',
      //   permanent: true,
      //   locale: false,
      // },
      // {
      //   source: '/:lang(en|id)',
      //   destination: '/:lang/home',
      //   permanent: true,
      //   locale: false,
      // },
      // {
      //   source: '/:path((?!en|id|admin|_next|static|favicon.ico|images|image|media|fonts|api).*)',
      //   destination: '/en/:path*',
      //   permanent: true,
      //   locale: false,
      // },
    ]
  },
  rewrites: async () => {
    return [
      {
        source: '/:locale(en|id)',
        destination: '/',
        locale: false,
      },
      {
        source: '/:locale(en|id)/:path*',
        destination: '/:path*',
        locale: false,
      },
    ]
  },
}

export default nextConfig
