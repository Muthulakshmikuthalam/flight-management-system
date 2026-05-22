import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/seat-selection/:path*",
    "/booking/:path*",
    "/confirmation/:path*",
    "/my-bookings/:path*"
  ]
}