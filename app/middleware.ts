import { auth } from "../auth";

export default auth((req) => {
  //get the current request url
  // const headers = new Headers(req.headers);
  // headers.set("x-current-path", req.nextUrl.pathname);
  //redirect to home page if not authenticated
  if (!req.auth && req.nextUrl.pathname !== "/") {
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  //redirect to dashboard if authenticated
  if (req.auth && req.nextUrl.pathname === "/") {
    const newUrl = new URL("/dashboard", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|serviceWorker).*)", // without the last trailing slash
  ],
};
