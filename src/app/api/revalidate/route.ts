import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.secret === process.env.PRISMIC_SECRET) {
    revalidateTag("prismic", "max");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  }
}
