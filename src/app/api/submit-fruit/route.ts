import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Received fruit submission:", body);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(
    { message: "Fruit submission received" },
    { status: 200 }
  );
}
