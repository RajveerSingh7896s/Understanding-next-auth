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
import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth";


const handler = NextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;
