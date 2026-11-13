import type { NextRequest } from "next/server"

import { getSessionCookie } from "better-auth/cookies"
import { NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const sessionCookie = getSessionCookie(request)

  const isProtectedRoute =
    pathname.startsWith("/user") || pathname.startsWith("/checkout")

  const isAuthRoute = pathname === "/sign-in" || pathname === "/sign-up"

  if (isProtectedRoute && !sessionCookie) {
    const signInUrl = new URL("/sign-in", request.url)

    signInUrl.searchParams.set(
      "callbackUrl",
      `${pathname}${request.nextUrl.search}`,
    )

    return NextResponse.redirect(signInUrl)
  }

  if (isAuthRoute && sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/user/:path*",
    "/checkout/:path*",
    "/cart/:path*",
    "/sign-in",
    "/sign-up",
  ],
}
