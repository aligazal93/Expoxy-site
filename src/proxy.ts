import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone();

    url.pathname = "/ar";

    return NextResponse.redirect(url);
}

export const config = {
    matcher: "/",
};