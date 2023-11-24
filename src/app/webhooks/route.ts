import { NextRequest, NextResponse } from 'next/server'


export async function POST(req: NextRequest) {
  const body = await req.json()
  try {
   console.log("WEBHOOK Runs");
   console.log("BODY EVENT",body);
    return NextResponse.json(
      JSON.stringify({
        message: 'Data Added',
      })
    )
  } catch (error: any) {
    console.log(error)
    NextResponse.json({ message: 'Something went wrong' })
  }
}
