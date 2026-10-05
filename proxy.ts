import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/:path*',
}

export function proxy(req: NextRequest) {
  if (process.env.VERCEL_ENV !== 'preview') {
    return NextResponse.next()
  }

  const expectedUser = process.env.BASIC_AUTH_USER
  const expectedPassword = process.env.BASIC_AUTH_PASSWORD

  if (!expectedUser || !expectedPassword) {
    console.error('BASIC_AUTH_USER and BASIC_AUTH_PASSWORD must be set for Preview deployments')
    return new NextResponse('Basic authentication is not configured', { status: 500 })
  }

  const authorization = req.headers.get('authorization')
  if (authorization?.startsWith('Basic ')) {
    try {
      const credentials = atob(authorization.slice('Basic '.length))
      const separator = credentials.indexOf(':')
      if (
        separator !== -1 &&
        credentials.slice(0, separator) === expectedUser &&
        credentials.slice(separator + 1) === expectedPassword
      ) {
        return NextResponse.next()
      }
    } catch {
      // Invalid Base64 credentials are treated as unauthenticated.
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}
