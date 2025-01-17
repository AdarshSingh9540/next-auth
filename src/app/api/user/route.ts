import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { NEXT_AUTH } from "../lib/route";

export async function GET() {
    const session = await getServerSession(NEXT_AUTH);

    return NextResponse.json({
        name: session?.user?.name
    })
}