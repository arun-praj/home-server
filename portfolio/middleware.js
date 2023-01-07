import { NextResponse } from 'next/server'
export function middleware(request) {
   let wildcard = request.headers.get('host').split('.')[0]
   const { pathname } = request.nextUrl
   if (
      pathname.startsWith('/api') || //  exclude all API routes
      pathname.startsWith('/static') || // exclude static files
      pathname.includes('.') // exclude all files in the public folder
   ) {
      //required at root level
      return NextResponse.next()
   }
   let url = request.nextUrl.clone()

   switch (wildcard) {
      case url.host || 'portfolio':
         return NextResponse.rewrite(
            url.origin + '/_sites/portfolio' + url.pathname
         )
      case 'bookmark':
         return NextResponse.rewrite(
            url.origin + '/_sites/bookmark' + url.pathname
         )

      case 'notes':
         return NextResponse.rewrite(
            url.origin + '/_sites/notes' + url.pathname
         )
   }
   // if (wildcard === 'movie') {
   //    let url = request.nextUrl.clone()
   //    // url.pathname =
   //    return NextResponse.rewrite(url + '_sites/movie')
   // } else if (wildcard === 'bookmark') {
   //    let url = request.nextUrl.clone()
   //    return NextResponse.rewrite(url + '_sites/bookmark' + url.pathname)
   // } else if (wildcard === 'notes') {
   //    let url = request.nextUrl.clone()
   //    console.log(url + '_sites/notes' + url.pathname)
   //    console.log(url.origin)
   //    return NextResponse.rewrite(
   //       url.origin + '/_sites/notes' + url.pathname
   //    )
   // }
   return NextResponse.next()
}
