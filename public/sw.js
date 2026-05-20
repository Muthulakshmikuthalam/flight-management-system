self.addEventListener(
"fetch",
(event)=>{

if(
!navigator.onLine
){

event.respondWith(

caches.match(
event.request
)

)

}

}
)