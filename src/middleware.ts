import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const secret = request.headers.get("x-secret-key");

  if (!secret || secret !== process.env.SECRET_KEY) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/api/getBooks", "/api/getBookBySlug/:slug"],
};
