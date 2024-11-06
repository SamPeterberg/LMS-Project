import { connectDB } from "@/lib/dbConnect";

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  console.log("obj===>", obj);

  return Response.json("user post request");
}
export async function GET() {
  return Response.json("user Get request");
}
