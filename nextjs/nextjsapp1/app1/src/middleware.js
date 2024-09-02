
import { NextResponse } from "next/server";

export default function middlewareee( req ){
    if (req.nextUrl.pathname==="/hidden") {
        return NextResponse.redirect(new URL("/",req.url)) 
    }
}










