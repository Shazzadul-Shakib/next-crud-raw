import connectMongoDB from "@/lib/mongodb";
import users from "@/models/users";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const res = await users.find();
  return NextResponse.json(res);
}
