import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest){

const protectedRoutes=[

"/seat-selection",
"/booking",
"/confirmation",
"/my-bookings"

]

const isProtected=

protectedRoutes.some(route=>
request.nextUrl.pathname.startsWith(route)
)

const flightData=

request.cookies.get("flight-booking")

if(

isProtected &&
!flightData

){

return NextResponse.redirect(
new URL("/",request.url)
)

}

return NextResponse.next()

}

export const config={

matcher:[

"/seat-selection/:path*",
"/booking/:path*",
"/confirmation/:path*",
"/my-bookings/:path*"

]

}