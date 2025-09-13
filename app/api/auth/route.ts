import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const body = await req.json();
  if(body.email && body.password) {
    return NextResponse.json({ success: true, role: 'student' });
  }
  return NextResponse.json({ success: false }, { status: 401 });
}