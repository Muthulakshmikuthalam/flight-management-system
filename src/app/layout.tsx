import "./globals.css"
import InstallBanner from "../component/InstallBanner"

export const metadata = {

title:"SkyWay",

description:"Flight Booking App",

manifest:"/manifest.json",

themeColor:"#0B46CD"

}

export default function RootLayout({
children,
}:{
children:React.ReactNode
}){

return(

<html lang="en">

<body>

<InstallBanner/>

{children}

</body>

</html>

)

}