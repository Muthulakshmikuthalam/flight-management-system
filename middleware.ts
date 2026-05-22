import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("sb-access-token")?.value

  const protectedRoutes = [
    "/seat-selection",
    "/booking",
    "/confirmation",
    "/my-bookings"
  ]

  const isProtected = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth", request.url))
  }

  return NextResponse.next()
}