// import { NextRequest, NextResponse } from "next/server";

// //catches all routes comming from /api/auth/...(whatever)
// export async function GET(req : NextRequest , {params}:{params : Promise<{authRoutes : string[]}>}){
//     const reqParams = await params ;
//     console.log(reqParams.authRoutes);
//     return NextResponse.json({
//         message:"hiii there..."
//     })
// }

// export function POST(){
//     return NextResponse.json({
//         message:"You are calling a post request"
//     })
// }
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials: any) {
        console.log(credentials) ;
        //validation
        return {
          id: "user1",
          name:"rajveer singh chandel",
          email:"rajveer@gmail.com"
        };
      },
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;
