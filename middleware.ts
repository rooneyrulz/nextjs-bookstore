// import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(request: NextRequestWithAuth) {

    // if (
    //   request.nextUrl.pathname.startsWith("/products/new") &&
    //   request.nextauth.token?.role !== "admin"
    // ) {
    //   return NextResponse.error();
    // }

//     // Restricted /cart path for admin just coz no cart functionality is implemented for admin
//     if (
//       request.nextUrl.pathname.startsWith("/cart") &&
//       request.nextauth.token?.role === "admin"
//     ) {
//       return NextResponse.error();
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// );

// export const config = { matcher: ["/products/new"] };

export default function() {}
