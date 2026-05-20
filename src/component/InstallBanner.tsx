"use client"

import {useEffect,useState} from "react"

export default function InstallBanner(){

const [promptEvent,setPromptEvent]=useState<any>(null)

useEffect(()=>{

const handler=(e:any)=>{

e.preventDefault()

setPromptEvent(e)

}

window.addEventListener(
"beforeinstallprompt",
handler
)

return()=>{

window.removeEventListener(
"beforeinstallprompt",
handler
)

}

},[])

function installApp(){

if(promptEvent){

promptEvent.prompt()

}

}

if(!promptEvent)return null

return(

<div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-xl z-50 flex items-center gap-3">

<p>
Install SkyWay App
</p>

<button
onClick={installApp}
className="bg-white text-blue-600 px-3 py-1 rounded-lg"
>

Install

</button>

</div>

)

}