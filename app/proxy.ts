// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/:path*", // 全ページに適用
};

export function middleware(req: NextRequest) {
  // Preview環境（developブランチ）のみBasic認証をかける
  if (process.env.VERCEL_ENV !== "preview") {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, password] = atob(authValue).split(":");

    if (
      user === process.env.BASIC_AUTH_USER &&
      password === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next();
    }
  }

  // 認証失敗時
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
